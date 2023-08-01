const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".lower__nav-menu");
const closeBtn = document.querySelector(".menu__button-x")

navMenu.classList.remove("lower__nav-menu-visible");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("lower__nav-menu-visible")
});

closeBtn.addEventListener("click", () => {
  navMenu.classList.toggle("lower__nav-menu-visible")
});
