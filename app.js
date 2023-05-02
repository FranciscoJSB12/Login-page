const nav = document.querySelector("nav");
const ul = document.querySelector("ul");
const li = document.querySelectorAll(".items");
const menu = document.querySelector(".menu");
menu.addEventListener("click", function() {
    menu.classList.toggle("menu-pressed");
    nav.classList.toggle("mobile-menu");
    ul.classList.toggle("active-ul");
    for(let i=0; i<li.length;i++) {
        li[i].classList.toggle("mobile-items");
    }
});