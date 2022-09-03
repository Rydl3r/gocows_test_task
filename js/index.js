const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".header__menu");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menu.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menu.classList.remove("open");
    menuOpen = false;
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
