let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menuBtn.classList.toggle("fixed");
  menu.classList.toggle("active");
});
