/*** Document Ready */
document.addEventListener('DOMContentLoaded', () => {
    mobileMenu_init();

    window.addEventListener('resize', () => {
        mobileMenu_init();
    });
});

/*** Mobile Menu */

function mobileMenu_show() {
    return (window.matchMedia('(max-width: 900px)').matches) ? true : false;
}


function mobileMenu_init() {
    const couple = document.querySelector('.couple');

    if (mobileMenu_show()) {
        if (document.querySelector('#mobile-menu') == null) {

            /*  const text = document.createElement('div');
           text.id = 'mobile-menu';
            text.textContent = "Meny";  */

            document.querySelector('header nav').innerHTML += '<div id="mobile-menu">Meny</div>';
            mobileMenu_build();
            document.querySelector('#mobile-menu').addEventListener('click', function (event) {
                event.preventDefault();

                mobileMenu_toggle();


            });
        }
    }
    else {
        mobileMenu_destroy();
    }
}

function mobileMenu_build() {
    let menu_content = document.createElement('div');
    menu_content.setAttribute('id', 'mobile-menu-content');
    document.body.append(menu_content);

    let menu_content_overflow = document.createElement('div');
    menu_content.appendChild(menu_content_overflow);

    let navigation_clone = document.querySelector('header nav > ul').cloneNode(true);
    menu_content_overflow.appendChild(navigation_clone);

}


function mobileMenu_toggle() {
    const couple = document.querySelector('.couple');
    const meny = document.getElementById('mobile-menu');
    document.getElementById('mobile-menu').classList.toggle('open');
    document.getElementById('mobile-menu-content').classList.toggle('open');
    meny.textContent == 'Meny' ? meny.textContent = 'Stäng' : meny.textContent = 'Meny';
    couple.classList.toggle('hide')
}


function mobileMenu_destroy() {
    const couple = document.querySelector('.couple');
    let mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu != null) {
        mobileMenu.remove();
        document.getElementById('mobile-menu-content').remove();
        // BUG: om man använt functionen "destroy" 
        // så slutar classList.toggle "hide" att fungera i functionen "toggle"
        couple.style.opacity = '1';
    }
}

// LAZY LOAD IMAGES WITH FADE IN:
// images needs to be formatted like this:
// <img class="lazy-load__image" data-src="image.png">

// find all images
let images = document.querySelectorAll('.lazy-load');

function checkScroll(e) {
    images.forEach((image, i) => {

        const top = Math.round(image.getBoundingClientRect().top)
        const height = Math.round(image.getBoundingClientRect().height)
        const windowHeight = window.innerHeight

        // if image is scrolled into viewport
        if (top + (height / 2) < windowHeight + 200) {

            // if image has no src
            if (image.src.length < 1) {

                // find url in data-img (<img data-src="image.png">) and set it as "src" 
                // (<img src="image.png">) when it is in viewport and should be loaded.
                if (image.dataset.src) {
                    image.src = image.dataset.src;
                }
            }

            // add active class to add animation
            image.classList.add('lazy-load-active')

        } else {
            image.classList.remove('lazy-load-active')
        }
    })
}

// run function one time when first loaded to check if there are any images
// above the fold that needs to be loaded before scroll
checkScroll();

// run function when scroll
window.addEventListener('scroll', function (e) {
    checkScroll();
})

// SHOW HEADER SCROLL UP: 

// CAROUSEL:
