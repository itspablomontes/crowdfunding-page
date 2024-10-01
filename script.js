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



const buttonReward = document.querySelectorAll('.button-reward');
const closeReward =  document.querySelector('#toggle-select-reward');
const modal = document.querySelector('#modal')
const fade = document.querySelector('#fade-bg');

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}


[closeReward, fade].forEach((elements) => {
    elements.addEventListener('click', () => toggleModal());
});

buttonReward.forEach((elements) => {
    elements.addEventListener('click', () => toggleModal()) 
});

const chosenRewardBox = document.querySelector('.chosen-reward-box');

const noRewardRadio = document.querySelector('#no-reward');
const bambooStandRadio = document.querySelector('#bamboo-stand');
const blackEditionRadio = document.querySelector('#black-edition');
const mahogamyRadio = document.querySelector('#mahogamy');

const hiddenNoReward = document.querySelector('#hidden-no-reward');
const hiddenBambooStand = document.querySelector('#hidden-bamboo-stand');
const hiddenBlackEdition = document.querySelector('#hidden-black-edition');
const hiddenMahogamy = document.querySelector('#hidden-mahogamy');

const pledgeNoReward = document.querySelector('#pledge-no-reward');
const pledgeBambooStand = document.querySelector('#pledge-bamboo-stand');
const pledgeBlackEdition = document.querySelector('#pledge-black-edition');
const pledgeMahogamy = document.querySelector('#pledge-mahogamy');

noRewardRadio.addEventListener('change', () => {

        pledgeNoReward.classList.add('chosen-reward-box');
        pledgeBambooStand.classList.remove('chosen-reward-box');
        pledgeBlackEdition.classList.remove('chosen-reward-box');
        pledgeMahogamy.classList.remove('chosen-reward-box');

        hiddenNoReward.classList.remove('hide');
        hiddenBambooStand.classList.add('hide');
        hiddenBlackEdition.classList.add('hide');
        hiddenMahogamy.classList.add('hide');
});

bambooStandRadio.addEventListener('change', () => {

    pledgeNoReward.classList.remove('chosen-reward-box');
    pledgeBambooStand.classList.add('chosen-reward-box');
    pledgeBlackEdition.classList.remove('chosen-reward-box');
    pledgeMahogamy.classList.remove('chosen-reward-box');

    hiddenNoReward.classList.add('hide');
    hiddenBambooStand.classList.remove('hide');
    hiddenBlackEdition.classList.add('hide');
    hiddenMahogamy.classList.add('hide');
});

blackEditionRadio.addEventListener('change', () => {

    pledgeNoReward.classList.remove('chosen-reward-box');
    pledgeBambooStand.classList.remove('chosen-reward-box');
    pledgeBlackEdition.classList.add('chosen-reward-box');
    pledgeMahogamy.classList.remove('chosen-reward-box');

    hiddenNoReward.classList.add('hide');
    hiddenBambooStand.classList.add('hide');
    hiddenBlackEdition.classList.remove('hide');
    hiddenMahogamy.classList.add('hide');
});

mahogamyRadio.addEventListener('change', () => {

    pledgeNoReward.classList.remove('chosen-reward-box');
    pledgeBambooStand.classList.remove('chosen-reward-box');
    pledgeBlackEdition.classList.remove('chosen-reward-box');
    pledgeMahogamy.classList.add('chosen-reward-box');

    hiddenNoReward.classList.add('hide');
    hiddenBambooStand.classList.add('hide');
    hiddenBlackEdition.classList.add('hide');
    hiddenMahogamy.classList.remove('hide');
});