//====================
// MOBILE MENU
//====================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

//====================
// STICKY HEADER
//====================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){

        header.classList.add("sticky");

    }

    else{

        header.classList.remove("sticky");

    }

});