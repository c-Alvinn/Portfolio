// Menu Config
const mobileMenu = document.querySelector(".mobile-menu");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-list li");
const nav = document.querySelector("nav");

function addClickEvent() {
    if (mobileMenu) {
        mobileMenu.addEventListener("click", handleClick);
    }
}

function handleClick() {
    navList.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    nav.classList.toggle("active");
    animateLinks();
}

function animateLinks() {
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ""
        }else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
        }
    });
}

addClickEvent();
// End of Menu Config

// disable arrow icon on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".scrollDownBtn").style.opacity = "0";
  } else {
    document.querySelector(".scrollDownBtn").style.opacity = "1";
  }
}
// end of disable arrow icon