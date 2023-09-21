// Search Button Start
const searchBtn = document.getElementById("search-btn");
const closeBtn = document.getElementById("close-btn");
const input = document.getElementById("input");

searchBtn.addEventListener("click", () => {
  input.classList.toggle("active");
  closeBtn.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  input.classList.remove("active");
  closeBtn.classList.remove("active");
});

// Search Button End

// JavaScript to add/remove the class when scrolling
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

// Burger Menu Start

const burgerMenu = document.querySelector(".burger-btn");
const closeMenu = document.querySelector(".close-btn");
const list = document.querySelector(".mobile-list");

const handleMenu = () => {
  closeMenu.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  list.classList.toggle("active");
}

burgerMenu.addEventListener("click", handleMenu);
closeMenu.addEventListener("click", handleMenu);

// Burger Menu End

// Swiper Left - Right Hover Effect

document.querySelector('.left-info').addEventListener('mouseover', () => {
  document.querySelector('.right-info').style.opacity = '0.5';
});

document.querySelector('.left-info').addEventListener('mouseout', () => {
  document.querySelector('.right-info').style.opacity = '1';
});

document.querySelector('.right-info').addEventListener('mouseover', () => {
  document.querySelector('.left-info').style.opacity = '0.5';
});

document.querySelector('.right-info').addEventListener('mouseout', () => {
  document.querySelector('.left-info').style.opacity = '1';
});

// Swiper Left - Right Hover Effect

// Slider Start

let swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: {
    releaseOnEdges: true,
  },
});

// Slider End

