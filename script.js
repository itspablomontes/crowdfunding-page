const menu = document.querySelector(".menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

menu.addEventListener("click", () =>{
    menu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

const bookmarkMobile = document.getElementById("bookmark");
const bookmarkDesktop = document.getElementById("bookmark-desktop");

const bookmarkIconMobile = document.getElementById("bookmark-icon");
const bookmarkCircleMobile = document.getElementById("bookmark-circle");

const bookmarkIconDesktop = document.getElementById("bookmark-icon-desktop");
const bookmarkCircleDesktop = document.getElementById("bookmark-circle-desktop");

const bookmarkText = document.getElementById("bookmark-text");

let isBookmarkedMobile = false;
let isBookmarkedDesktop = false;

function toggleBookmarkMobile() {
    isBookmarkedMobile = !isBookmarkedMobile; 
    if (isBookmarkedMobile) {
        bookmarkIconMobile.setAttribute('fill', 'white');
        bookmarkCircleMobile.setAttribute('fill', 'hsl(176, 72%, 28%)');
    } else {
        bookmarkIconMobile.setAttribute('fill', '#B1B1B1'); 
        bookmarkCircleMobile.setAttribute('fill', '#2F2F2F'); 
    }
}
function toggleBookmarkDesktop() {
    isBookmarkedDesktop = !isBookmarkedDesktop;
    if (isBookmarkedDesktop) {
        bookmarkIconDesktop.setAttribute('fill', 'white');
        bookmarkCircleDesktop.setAttribute('fill', 'hsl(176, 72%, 28%)');
        bookmarkText.style.color = 'hsl(176, 72%, 28%)'
        bookmarkText.innerText = 'Bookmarked'
        bookmarkText.style.fontSize = '16px'
    } else {
        bookmarkIconDesktop.setAttribute('fill', '#B1B1B1'); 
        bookmarkCircleDesktop.setAttribute('fill', '#2F2F2F'); 
        bookmarkText.style.color = '#808080'
        bookmarkText.innerText = 'Bookmark'
        bookmarkText.style.fontSize = '18px'
    }
}


bookmarkMobile.onclick = toggleBookmarkMobile;
bookmarkDesktop.onclick = toggleBookmarkDesktop;
