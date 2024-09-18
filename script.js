const menu = document.querySelector(".menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
menu.addEventListener("click", () =>{
    menu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});