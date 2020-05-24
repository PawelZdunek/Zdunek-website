const hamburger = document.querySelector('.hamburger-container');
const navigation = document.querySelector(".nav")

const handleClick = () => {
    hamburger.classList.toggle('hamburger-active');
    navigation.classList.toggle("nav-open");
}

hamburger.addEventListener('click', handleClick)


const button = document.querySelector(".menu-uslugi-dropdown-horizontal");
const uslugiHorizontal = document.querySelector(".menu-uslugi-horizontal");

const uslugiOpen = () => {
    uslugiHorizontal.classList.toggle("menu-uslugi-open");
}

button.addEventListener("click", uslugiOpen);