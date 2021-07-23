const menuOpen = document.getElementById("three-bars");
menuOpen.addEventListener("click", () => {
     openMenu();
});

const menuClose = document.getElementById("menu-close");
menuClose.addEventListener("click", () => {
     closeMenu();
});

const menuUL = document.getElementById("menu-ul");
const nav = document.getElementById("nav");

//
window.addEventListener("resize", () => {
     initilise(window.innerWidth);
});
initilise(window.innerWidth);


function initilise(screenWidth) {
     if (screenWidth < 700) {
          nav.classList.add("mobile");
          nav.classList.remove("desktop");
          closeMenu();
     } else if (screenWidth > 700) {
          nav.classList.remove("mobile");
          nav.classList.add("desktop");
          closeMenu();
     }
}

function openMenu() {
     menuClose.classList.remove("hide");
     menuUL.classList.remove("hide");
     menuOpen.classList.add("hide");
}

function closeMenu() {
     menuClose.classList.add("hide");
     menuUL.classList.add("hide");
     menuOpen.classList.remove("hide");
}
