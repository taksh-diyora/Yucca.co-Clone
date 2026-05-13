const locomotiveScroll = new LocomotiveScroll();

const navshop = document.querySelector(".nav-shop");
const navpackage = document.querySelector(".nav-packaging");
const navresource = document.querySelector(".nav-resource");
const navoption = document.querySelector(".nav-options");
const navbar = document.querySelector(".main-nav-bar");

navbar.addEventListener("mouseenter", () => {
    navbar.style.backgroundColor = "#fffdf5"
})
navbar.addEventListener("mouseleave", () => {
    navbar.style.backgroundColor = "transparent"
})

navshop.addEventListener("mouseenter", () => {
    navoption.style.top = "0";
    navoption.style.backgroundImage = "url('./image/image1.png')";
    navbar.style.backgroundColor = "#fffdf5";
})
navpackage.addEventListener("mouseenter", () => {
    navoption.style.top = "0";
    navoption.style.backgroundImage = "url('./image/image2.png')";
    navbar.style.backgroundColor = "#fffdf5";
})
navresource.addEventListener("mouseenter", () => {
    navoption.style.top = "0";
    navoption.style.backgroundImage = "url('./image/image3.png')";
    navbar.style.backgroundColor = "#fffdf5";
})

navoption.addEventListener("mouseenter", () => {
    navoption.style.top = "0";
    navbar.style.backgroundColor = "#fffdf5";
})

navshop.addEventListener("mouseleave", () => {
    navoption.style.top = "calc(-50% - 22vh)";
})
navpackage.addEventListener("mouseleave", () => {
    navoption.style.top = "calc(-50% - 22vh)";
})
navresource.addEventListener("mouseleave", () => {
    navoption.style.top = "calc(-50% - 22vh)";
})

navoption.addEventListener("mouseleave", () => {
    navoption.style.top = "calc(-50% - 22vh)";
    navbar.style.backgroundColor = "transparent";
})
