const hamburger = document.querySelector('.hamburger-container');

const handleClick = () => {
    hamburger.classList.toggle('hamburger-active');
}

hamburger.addEventListener('click', handleClick)