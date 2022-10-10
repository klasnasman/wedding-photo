// hamburger menu
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');
const couple = document.querySelector('.couple');


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


// active link dot in menu test
$(document).ready(function () {
    $('ul li a').click(function () {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});

