const buttonClose = document.querySelector(".menu-close");

buttonClose.addEventListener("click", () => {
  document
    .querySelector(".menu-nav-mobile")
    .classList.add("menu-nav-mobile-hide");
});

const menuOpen = document.querySelector(".menu-mobile-icon");
console.log(menuOpen);

menuOpen.addEventListener("click", () => {
  document
    .querySelector(".menu-nav-mobile").classList.remove("menu-nav-mobile-hide");
});
