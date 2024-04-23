const modeButton = document.querySelector('#mode-button');
const body = document.querySelector('body');

modeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  nav.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    nav.classList.remove("active");
    menuIcon.classList.remove("active");
  }
});