// Konfigurasi Bahasa
const languages = {
  en: { code: "en", flag: "us.svg", name: "English" },
  es: { code: "es", flag: "es.svg", name: "Español" },
  id: { code: "id", flag: "id.svg", name: "Bahasa Indonesia" },
  pt: { code: "pt", flag: "pt.svg", name: "Português" },
  de: { code: "de", flag: "de.svg", name: "Deutsch" },
  fr: { code: "fr", flag: "fr.svg", name: "Français" },
  ja: { code: "ja", flag: "jp.svg", name: "日本語" },
  ru: { code: "ru", flag: "ru.svg", name: "Русский" },
  tr: { code: "tr", flag: "tr.svg", name: "Türkçe" },
  ko: { code: "ko", flag: "kr.svg", name: "한국어" },
  tl: { code: "tl", flag: "ph.svg", name: "Filipino" },
};

// Inisialisasi Google Translate
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: Object.keys(languages).join(","),
      autoDisplay: false,
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    "google_translate_element"
  );

  // Sembunyikan widget asli Google
  const style = document.createElement("style");
  style.textContent = `
    .goog-te-combo, .goog-te-banner-frame, .skiptranslate { 
      display: none !important; 
    }
    body { top: 0 !important; }
  `;
  document.head.appendChild(style);
}

// Load Script Google Translate
function loadGoogleTranslate() {
  if (!document.querySelector('script[src*="translate.google.com"]')) {
    const script = document.createElement("script");
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }
}

// Fungsi Ganti Bahasa
function changeLanguage(lang) {
  if (!languages[lang]) return;

  // Update UI
  const flagImg = document.getElementById("current-flag");
  if (flagImg) {
    flagImg.src = `assets/img/flags/${languages[lang].flag}`;
    flagImg.alt = languages[lang].name;
  }

  // Trigger Google Translate
  const googleSelect = document.querySelector(".goog-te-combo");
  if (googleSelect) {
    googleSelect.value = lang;
    googleSelect.dispatchEvent(new Event("change"));
  } else {
    console.log("Google Translate belum siap, mencoba lagi...");
    setTimeout(() => changeLanguage(lang), 300);
  }

  document.getElementById("language-dropdown")?.classList.add("hidden");
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  loadGoogleTranslate();

  // Toggle Dropdown
  document.getElementById("language-toggle")?.addEventListener("click", function (e) {
    e.stopPropagation();
    document.getElementById("language-dropdown")?.classList.toggle("hidden");
  });

  // Tutup dropdown saat klik di luar
  document.addEventListener("click", function (e) {
    if (!e.target.closest("#language-selector")) {
      document.getElementById("language-dropdown")?.classList.add("hidden");
    }
  });

  // Handle pemilihan bahasa
  document.querySelectorAll("[data-lang]").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const lang = this.getAttribute("data-lang");
      changeLanguage(lang);
    });
  });

  // Set bahasa default
  if (!localStorage.getItem("preferredLang")) {
    const userLang = navigator.language.substring(0, 2);
    if (languages[userLang]) {
      changeLanguage(userLang);
    }
  }
});

// Simpan preferensi bahasa
window.addEventListener("beforeunload", function () {
  const currentFlag = document.getElementById("current-flag")?.src;
  if (currentFlag) {
    const lang = Object.keys(languages).find((key) => currentFlag.includes(languages[key].flag));
    if (lang) localStorage.setItem("preferredLang", lang);
  }
});
