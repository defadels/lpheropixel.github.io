// assets/js/translate.js
const languages = {
  en: { code: "en", flag: "us.svg", name: "English", isDefault: true },
  es: { code: "es", flag: "es.svg", name: "Español" },
  id: { code: "id", flag: "id.svg", name: "Bahasa Indonesia" },
  pt: { code: "pt", flag: "pt.svg", name: "Português" },
  de: { code: "de", flag: "de.svg", name: "Deutsch" },
  fr: { code: "fr", flag: "fr.svg", name: "Français" },
  jp: { code: "jp", flag: "jp.svg", name: "日本語" },
  ru: { code: "ru", flag: "ru.svg", name: "Русский" },
  tr: { code: "tr", flag: "tr.svg", name: "Türkçe" },
  kr: { code: "kr", flag: "kr.svg", name: "한국어" },
  ph: { code: "ph", flag: "ph.svg", name: "Filipino" },
};

let currentLanguage = "en";
let translations = {};

// Load terjemahan HANYA untuk bahasa non-Inggris
async function loadTranslations(lang) {
  if (languages[lang]?.isDefault) return; // Skip loading untuk bahasa Inggris

  try {
    const response = await fetch(`public/locales/${lang}/translation.json`);
    translations[lang] = await response.json();
    applyTranslations(lang);
  } catch (error) {
    console.error(`Failed to load ${lang} translations:`, error);
  }
}

// Terapkan terjemahan atau reset ke default
function applyTranslations(lang) {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");

    // Jika bahasa Inggris, kembalikan ke teks default dari HTML
    if (languages[lang]?.isDefault) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        // Untuk input dan textarea, hanya ubah placeholder
        el.placeholder = el.dataset.defaultText || el.placeholder;
      } else {
        // Untuk elemen lain, ubah innerHTML
        el.innerHTML = el.dataset.defaultText || el.innerHTML;
      }
      return;
    }

    // Support dot notation (e.g., "privacy.p1")
    const value = key.split(".").reduce((obj, k) => obj?.[k], translations[lang]);
    
    if (value) {
      // Terjemahkan konten biasa atau placeholder
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        // Untuk input dan textarea, hanya ubah placeholder
        el.placeholder = value;
      } else {
        // Untuk elemen lain, ubah innerHTML
        el.innerHTML = value;
      }
    }
  });

  updateLanguageDropdown(lang);
}

// Update dropdown bahasa
function updateLanguageDropdown(lang) {
  const currentFlag = document.getElementById("current-flag");
  const currentLangName = document.getElementById("current-lang-name");

  if (currentFlag && languages[lang]) {
    currentFlag.src = `assets/img/flags/${languages[lang].flag}`;
  }
  if (currentLangName && languages[lang]) {
    currentLangName.textContent = languages[lang].name;
  }
}

// Ganti bahasa
export function setLanguage(lang) {
  if (!languages[lang]) return;

  currentLanguage = lang;

  // Jika bahasa Inggris, reset ke konten default tanpa load JSON
  if (languages[lang].isDefault) {
    applyTranslations(lang);
    translations = {}; // Kosongkan cache terjemahan
  }
  // Jika bahasa lain, load terjemahan
  else {
    loadTranslations(lang);
  }

  localStorage.setItem("preferredLanguage", lang);
}

// Inisialisasi
document.addEventListener("DOMContentLoaded", () => {
  // Simpan teks default ke atribut data-default-text menggunakan innerHTML (bukan textContent)
  // agar tag HTML seperti <br> tetap dipertahankan
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.dataset.defaultText = el.innerHTML;
  });

  // Set bahasa awal
  const savedLang = localStorage.getItem("preferredLanguage") || "en";
  setLanguage(savedLang);

  // Event listener untuk dropdown (tetap sama)
  document.getElementById("language-toggle")?.addEventListener("click", () => {
    document.getElementById("language-dropdown").classList.toggle("hidden");
  });

  const langButtons = document.querySelectorAll("[data-lang]");
  langButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const lang = e.currentTarget.getAttribute("data-lang");
      setLanguage(lang);
      document.getElementById("language-dropdown").classList.add("hidden");
    });
  });
});

// 2. Export fungsi di akhir file
export { applyTranslations, currentLanguage };
