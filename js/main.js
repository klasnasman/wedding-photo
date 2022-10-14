// hamburger menu
const couple = document.querySelector('.couple');
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click', function () {
        close();
    })
})

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    couple.style.opacity = '0';
    couple.style.transition = "opacity 0.1s linear";
}
function close() {
    mainMenu.style.top = '-100%';
    couple.style.opacity = '1';
    couple.style.transition = "opacity 0.1s linear";
    couple.style.transitionDelay = "0.4s";
}


