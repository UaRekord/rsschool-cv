let navButton = document.getElementById('nav-button');
let menu = document.getElementById('menu');
navButton.addEventListener('click', toggleClass);
menu.addEventListener('click', toggleClass);

function toggleClass() {
    navButton.classList.toggle('clicked');
    menu.classList.toggle('clicked');
}
