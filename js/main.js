// PAGE FADE TRANSITION
async function fadeIn(el, durationInMs) {
  return new Promise((resolve) => {
    const animation = el.animate(
      [
        {
          opacity: "0",
        },
        {
          opacity: "0.5",
          offset: 0.5,
        },
        {
          opacity: "1",
          offset: 1,
        },
      ],
      {
        duration: durationInMs,
        easing: "linear",
        iterations: 1,
        direction: "normal",
        fill: "forwards",
        delay: 0,
        endDelay: 0,
      }
    );
    animation.onfinish = () => resolve();
  });
}

async function fadeInMain() {
  for (const main of document.getElementsByClassName("page__transition")) {
    await fadeIn(main, 800);
  }
}

window.addEventListener("load", async () => {
  await fadeInMain();
});

function mobileMenu() {
  const menuBtn = document.getElementById("header__button");
  const menuMobile = document.getElementById("mobile__menu");
  const linksMobile = menuMobile.querySelectorAll(".mobile__ul li");
  const couple = document.querySelector(".couple");

  const resizeHandler = () => {
    let w = window.innerWidth;
    if (w > 900) {
      menuMobile.classList.remove("open");
      menuBtn.textContent = "Meny";
    }
  };

  const toggleMenuHandler = () => {
    couple && couple.classList.toggle("hide");
    menuMobile.classList.toggle("open");
    menuBtn.textContent = menuBtn.textContent == "Meny" ? "Stäng" : "Meny";
  };

  const linkClickHandler = () => {
    menuMobile.classList.remove("open");
    menuBtn.textContent = "Meny";
  };

  window.addEventListener("resize", resizeHandler);
  menuBtn.addEventListener("click", toggleMenuHandler);

  linksMobile.forEach((link) => {
    link.addEventListener("click", linkClickHandler);
  });
}

const mobile = mobileMenu();

// LAZY LOAD IMAGES WITH FADE IN:
let images = document.querySelectorAll(".lazy-load");

function checkScroll() {
  const margin = 50;
  if (images.length === 0) {
    return;
  }
  for (const image of images) {
    const rect = image.getBoundingClientRect();
    const isTopVisible =
      rect.top + rect.height / 2 < window.innerHeight + margin;
    const hasNoSrc = !image.src;
    if (isTopVisible) {
      if (hasNoSrc && image.dataset.src) {
        image.src = image.dataset.src;
      }
      image.classList.add("lazy-load-active");
    } else {
      image.classList.remove("lazy-load-active");
    }
  }
}

checkScroll();
window.addEventListener("scroll", checkScroll);
