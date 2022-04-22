let mainNav = document.querySelector(".main-nav");
let navBtnToggle = document.querySelector(".main-nav__toggle");
let mainHeader = document.querySelector(".main-header");

mainNav.classList.remove("main-nav--nojs");
mainHeader.classList.add("main-header--nojs");
mainNav.classList.remove("main-nav--opened");
mainNav.classList.add("main-nav--closed");
mainHeader.classList.remove("main-header--closed");

navBtnToggle.addEventListener('click', function () {
 if (mainNav.classList.contains("main-nav--opened")) {
   mainNav.classList.remove("main-nav--opened");
   mainNav.classList.add("main-nav--closed");
   mainHeader.classList.remove("main-header--closed");
 } else {
   mainNav.classList.add("main-nav--opened");
   mainNav.classList.remove("main-nav--closed");
   mainHeader.classList.add("main-header--closed");
 }
})
