const barsBtn = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".lower__nav-menu");
const closeBtn = document.querySelector(".closeMenu")
const closeElement = document.querySelectorAll(".close-menu")

navMenu.classList.remove("lower__nav-menu-visible");

barsBtn.addEventListener("click", () => {
  navMenu.classList.toggle("lower__nav-menu-visible");
});

closeBtn.addEventListener("click", () => {
  navMenu.classList.toggle("lower__nav-menu-visible");
});

closeElement.forEach(item => {
  item.addEventListener("click", () => {
    navMenu.classList.toggle("lower__nav-menu-visible");
  })
})

