// -------------- Toggle Button --------------
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  hamburger.classList.toggle("ri-close-large-line");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
  });
});

// -------------- Scroll Navbar --------------
const scrollHeader = () => {
  const header = document.getElementById("navbar");

  if (this.scrollY >= 50) {
    header.classList.add("bg-black", "bg-opacity-80");
  } else {
    header.classList.remove("bg-black", "bg-opacity-80");
  }
};

window.addEventListener("scroll", scrollHeader);

// portfolio
const portfolioItems = [
  {
    id: 1,
    title: "4Bit Craft",
    date: "14 February 2023",
    image: [
      "assets/img/4bit_craft.jpeg",
      "assets/img/4bitcraft/4Bit_Craft_MarketingScreenshot_0.jpg",
      "assets/img/4bitcraft/4Bit_Craft_MarketingScreenshot_1.jpg",
      "assets/img/4bitcraft/4Bit_Craft_MarketingScreenshot_2.jpg",
      "assets/img/4bitcraft/4Bit_Craft_MarketingScreenshot_3.jpg",
      "assets/img/4bitcraft/4Bit_Craft_MarketingScreenshot_4.jpg",
      "assets/img/4bitcraft/4Bit_Craft_MarketingScreenshot_5.jpg",
      "assets/img/4bitcraft/4Bit_Craft_MarketingScreenshot_6.jpg",
      "assets/img/4bitcraft/4Bit_Craft_MarketingScreenshot_7.jpg",
    ],
    description:
      "Turn your Minecraft into a super cute game! Everything seems tiny: every block, every mob, every tree.<br><br>+ Super cute 4x4 pack<br>+ 4x4 blocks, items, mobs and more<br>+ Faithful to vanilla textures<br>+ 1.20 Resource Pack",
    builders:
      "affe481 - koin1 - BigKingHD - Chonike - FlyingZera - hackerpotter - M1ller_ - sebsy - VyseHD - WoIstMeineSocke - Youseles",
  },
  {
    id: 2,
    title: "More Allays",
    date: "24 January 2023",
    image: [
          "assets/img/more_allays.jpeg",
          "assets/img/moreallays/More_Allays_MarketingScreenshot_0.jpg",
          "assets/img/moreallays/More_Allays_MarketingScreenshot_1.jpg",
          "assets/img/moreallays/More_Allays_MarketingScreenshot_2.jpg",
          "assets/img/moreallays/More_Allays_MarketingScreenshot_3.jpg",
          "assets/img/moreallays/More_Allays_MarketingScreenshot_4.jpg",
    ],
    description:
      "Start your Minecraft survival adventure! Many new Allays are waiting for you: Enderman Allay, Axolotl Allay, Warden Allay and many more! Free them from the dungeons and temples. Tame them and they will become your loyal pets!<br><br>+ 16 cute Allays added!<br> + Allay Dungeons &amp; Temples<br>+ 10 Allay skins included<br>+ Multiplayer &amp; Singleplayer friendly",
    
  },
  {
    id: 3,
    title: "Giant TNT",
    date: "17 February 2025",
    image: [
      "assets/img/giant_tnt.jpg",
      "assets/img/gianttnt/GIANT_TNT_MarketingScreenshot_0.jpg",
      "assets/img/gianttnt/GIANT_TNT_MarketingScreenshot_1.jpg",
      "assets/img/gianttnt/GIANT_TNT_MarketingScreenshot_2.jpg",
      "assets/img/gianttnt/GIANT_TNT_MarketingScreenshot_3.jpg",
      "assets/img/gianttnt/GIANT_TNT_MarketingScreenshot_4.jpg",
      "assets/img/gianttnt/GIANT_TNT_MarketingScreenshot_5.jpg",
      "assets/img/gianttnt/GIANT_TNT_MarketingScreenshot_6.jpg",
      "assets/img/gianttnt/GIANT_TNT_MarketingScreenshot_7.jpg",
      "assets/img/gianttnt/GIANT_TNT_MarketingScreenshot_8.jpg",
      "assets/img/gianttnt/GIANT_TNT_MarketingScreenshot_9.jpg",
    ],
    description: "Do you need the most extreme? These TNTs not only destroy bases, but also entire villages and large cities. Have fun with them! <br><br>+ Over 40 different Giant TNTs<br>+ Maximum destruction and explosions<br>+ Tornado, meteor, 5,000x and more TNTs!<br><br>++ Use it on your world! <br>++ Multiplayer friendly!<br>",
    
  },
  {
    id: 4,
    title: "Pastel Paradise",
    date: "10 September 2024",
    image: [
      "assets/img/pastelparadise.jpg",
      "assets/img/pastelparadise/PastelParadise_MarketingScreenshot_0.jpg",
      "assets/img/pastelparadise/PastelParadise_MarketingScreenshot_1.jpg",
      "assets/img/pastelparadise/PastelParadise_MarketingScreenshot_2.jpg",
      "assets/img/pastelparadise/PastelParadise_MarketingScreenshot_3.jpg",
      "assets/img/pastelparadise/PastelParadise_MarketingScreenshot_4.jpg",
      "assets/img/pastelparadise/PastelParadise_MarketingScreenshot_5.jpg",
      "assets/img/pastelparadise/PastelParadise_MarketingScreenshot_6.jpg",
      "assets/img/pastelparadise/PastelParadise_MarketingScreenshot_7.jpg",
      "assets/img/pastelparadise/PastelParadise_MarketingScreenshot_8.jpg",
      "assets/img/pastelparadise/PastelParadise_MarketingScreenshot_9.jpg",
    ],
    description: "Immerse yourself in the soothing beauty of pastel textures and colors.<br><br>+ 1.21 Tricky Trials textures update<br>+ Everything retextured in pastel style<br>+ New mob, animal and boss models<br>+ Texture block variations<br>+ Animated ores<br>+ Attention to detail<br><br>++ Use this texture pack in your world!",
    
  },
  {
    id: 5,
    title: "Zombie Bunker",
    date: "19 July 2022",
    image: [
      "assets/img/zombie_bunker.jpg",
      "assets/img/zombiebunker/Zombie_Bunker_MarketingScreenshot_0.jpg",
      "assets/img/zombiebunker/Zombie_Bunker_MarketingScreenshot_1.jpg",
      "assets/img/zombiebunker/Zombie_Bunker_MarketingScreenshot_2.jpg",
      "assets/img/zombiebunker/Zombie_Bunker_MarketingScreenshot_3.jpg",
      "assets/img/zombiebunker/Zombie_Bunker_MarketingScreenshot_4.jpg",
    ],
    description: "Protect your friends and yourself from a Zombie Apocalypse in a high security base! Your underground bunker has everything you need to survive. Press buttons and activate the anti-zombie walls!<br><br>+ Activatable safety walls<br>+ Secret bunker<br>+ Secure base<br>+ Zombie apocalypse<br>+ Custom zombies<br>++ Multiplayer and singleplayer",
    
  },
  {
    id: 6,
    title: "More Creepers",
    date: "8 October 2024",
    image: [
      "assets/img/more_creepers.jpg",
      "assets/img/morecreeper/More_Creepers_MarketingScreenshot_0.jpg",
      "assets/img/morecreeper/More_Creepers_MarketingScreenshot_1.jpg",
      "assets/img/morecreeper/More_Creepers_MarketingScreenshot_2.jpg",
      "assets/img/morecreeper/More_Creepers_MarketingScreenshot_3.jpg",
      "assets/img/morecreeper/More_Creepers_MarketingScreenshot_4.jpg",
      "assets/img/morecreeper/More_Creepers_MarketingScreenshot_5.jpg",
      "assets/img/morecreeper/More_Creepers_MarketingScreenshot_6.jpg",
      "assets/img/morecreeper/More_Creepers_MarketingScreenshot_7.jpg",
      "assets/img/morecreeper/More_Creepers_MarketingScreenshot_8.jpg",
      "assets/img/morecreeper/More_Creepers_MarketingScreenshot_9.jpg",
    ],
    description: "BOOOM! Add more unique Creepers to your world or realms project.<br><br>+ 10 ultimate Creeper<br>+ Amazing explosions<br>+ Collect creeper heads<br><br>++ Use it in YOUR WORLD! ++",
    
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const portfolioContainer = document.getElementById("portfolio-container");
  const modal = document.getElementById("portfolio-modal");
  const modalContent = document.getElementById("modal-content");
  const closeBtn = document.querySelector('[data-modal-hide="portfolio-modal"]');

  portfolioItems.forEach((item) => {
    const portfolioItem = document.createElement("div");
    portfolioItem.className = "flex justify-center";
    portfolioItem.innerHTML = `
        <button data-modal-target="portfolio-modal" data-modal-toggle="portfolio-modal"
          class="block text-white bg-[#202020] font-medium rounded-lg text-sm px-2 py-3 text-center w-[90%] hover:opacity-70  hover:border-[#379600] hover:border-[1px] hover:space-y-2 portfolio-item transition-all duration-300 ease-in-out"
          type="button" data-id="${item.id}">
          <span class="flex flex-col p-2 items-center justify-start">
            <img src="${item.image[0]}" alt="" class="w-[95%] h-[60%] mb-5 rounded-sm">
            <p class="font-semibold text-xl text-left w-full px-2 mb-1">${item.title}</p>
            <p class="text-xs text-left w-full px-2 text-[#A5A5A5]">${item.date}</p>
          </span>
        </button>
    `;
    portfolioContainer.appendChild(portfolioItem);
  });

  document.querySelectorAll(".portfolio-item").forEach((button) => {
    button.addEventListener("click", function() {
      const itemId = parseInt(this.getAttribute("data-id"));
      const item = portfolioItems.find((i) => i.id === itemId);

      if (item) {
        const images = item.image.map((img) => `<img src="${img}" alt="" class="w-full mb-5 rounded-sm">`).join('');
        modalContent.innerHTML = `
          <h1 class="text-center">${item.title}</h1>
          <p class="text-xs text-center text-[#A5A5A5] mb-6">${item.date}</p>
          <div class="slider-container relative">
            <div class="image-slider aspect-video">
              ${images}
            </div>
            <button class="prev-button absolute left-5 top-1/2 transform -translate-y-1/2 bg-[#379600] text-white p-2 rounded-l-md hover:bg-[#3b6b1f] transition-all duration-300 z-20">
              <i class="ri-arrow-left-line"></i>
            </button>
            <button class="next-button absolute right-5 top-1/2 transform -translate-y-1/2 bg-[#379600] text-white p-2 rounded-r-md hover:bg-[#3b6b1f] transition-all duration-300 z-20">
              <i class="ri-arrow-right-line"></i>
            </button>
            <div class="indicator-container flex justify-center mt-2"></div>
          </div>
          <p class="text-sm text-start text-[#A5A5A5] mb-6 mt-4">${item.description}</p>
        `;

        initSlider();

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
          modal.classList.add('show');
        }, 10);
      }
    });
  });

  closeBtn.addEventListener('click', function() {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto'; 
    }, 300);
  });

  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }, 300);
    }
  });

  function initSlider() {
    const images = modalContent.querySelectorAll('.image-slider img');
    let currentIndex = 0;
    let startX = 0;
    let isDragging = false;
  
    const sliderContainer = modalContent.querySelector('.slider-container');
    const imageSlider = modalContent.querySelector('.image-slider');
    const prevButton = modalContent.querySelector('.prev-button');
    const nextButton = modalContent.querySelector('.next-button');
    const indicatorContainer = modalContent.querySelector('.indicator-container');
  
    imageSlider.style.display = 'flex';
    imageSlider.style.width = `${images.length * 100}%`;
    imageSlider.style.transition = 'transform 0.3s ease';
    
    images.forEach(img => {
      img.style.width = `${100 / images.length}%`;
      img.style.flexShrink = '0';
      img.style.pointerEvents = 'none'; 
    });
  
    images.forEach((_, index) => {
      const box = document.createElement('div');
      box.className = 'indicator-box w-4 h-4 mx-1 rounded-full bg-gray-400 cursor-pointer';
      indicatorContainer.appendChild(box);
      
      box.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
      });
    });

    updateIndicator();
  
    const goToPrev = () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
      updateSlider();
    };
  
    const goToNext = () => {
      currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
      updateSlider();
    };
  
    prevButton.addEventListener('click', goToPrev);
    nextButton.addEventListener('click', goToNext);
  
    const leftClickArea = document.createElement('div');
    leftClickArea.className = 'absolute left-0 top-0 h-full w-1/3 z-10 cursor-wester';
    leftClickArea.style.backgroundColor = 'transparent';
    
    const rightClickArea = document.createElement('div');
    rightClickArea.className = 'absolute right-0 top-0 h-full w-1/3 z-10 cursor-easter';
    rightClickArea.style.backgroundColor = 'transparent';
  
    sliderContainer.appendChild(leftClickArea);
    sliderContainer.appendChild(rightClickArea);
  
    leftClickArea.addEventListener('click', goToPrev);
    rightClickArea.addEventListener('click', goToNext);
  
    const handleDragStart = (e) => {
      isDragging = true;
      startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      imageSlider.style.transition = 'none';
    };
  
    const handleDragMove = (e) => {
      if (!isDragging) return;
      
      const currentX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      const diffX = currentX - startX;
      
      const offset = -currentIndex * (100 / images.length);
      const newOffset = offset + (diffX / imageSlider.offsetWidth) * 100;
      imageSlider.style.transform = `translateX(${newOffset}%)`;
    };
  
    const handleDragEnd = (e) => {
      if (!isDragging) return;
      isDragging = false;
      imageSlider.style.transition = 'transform 0.3s ease';
      
      const endX = e.type.includes('touch') ? e.changedTouches[0].clientX : e.clientX;
      const diffX = endX - startX;
      
      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          goToPrev();
        } else {
          goToNext();
        }
      } else {
        updateSlider();
      }
    };
  
    sliderContainer.addEventListener('touchstart', handleDragStart, { passive: false });
    sliderContainer.addEventListener('touchmove', handleDragMove, { passive: false });
    sliderContainer.addEventListener('touchend', handleDragEnd, { passive: false });
  
    sliderContainer.addEventListener('mousedown', handleDragStart);
    sliderContainer.addEventListener('mousemove', handleDragMove);
    sliderContainer.addEventListener('mouseup', handleDragEnd);
    sliderContainer.addEventListener('mouseleave', handleDragEnd);
  
    function updateSlider() {
      const offset = -currentIndex * (100 / images.length);
      imageSlider.style.transform = `translateX(${offset}%)`;
      updateIndicator();
    }
  
    function updateIndicator() {
      const boxes = indicatorContainer.querySelectorAll('.indicator-box');
      boxes.forEach((box, index) => {
        box.style.backgroundColor = index === currentIndex ? '#379600' : 'gray';
      });
    }
  }
  });