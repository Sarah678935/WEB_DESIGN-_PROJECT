const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav ul li a");
const navList = document.querySelector("nav ul");

menuIcon.addEventListener("click", () => {
  navList.classList.toggle("show");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("show");
  });
});
