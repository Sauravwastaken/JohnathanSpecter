// This is used to show preloader
setTimeout(() => {
  let preloader = document.getElementsByClassName("preloader")[0];
  preloader.style.display = "none";
}, 2000);

// Initializing Hamburger Menu
let hamburger = document.getElementsByClassName("hamburger")[0];
hamburger.addEventListener("click", function () {
  let nav_option = document.getElementsByClassName("nav_option")[0];
  let nav_btn = document.getElementsByClassName("nav_btn")[0];
  if (nav_option.style.display == "flex") {
    nav_option.style.display = "none";
    nav_btn.style.display = "none";
    hamburger.style.position = "absolute";
  } else {
    hamburger.style.position = "fixed";

    nav_option.style.display = "flex";
    nav_btn.style.display = "block";
  }
});
