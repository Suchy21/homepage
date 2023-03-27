let bodyElement = document.querySelector(".js-body");
let buttonElement = document.querySelector(".js-button");
let aboutMeElement = document.querySelector(".js-aboutMe");
let headerElement = document.querySelector(".js-header");



buttonElement.addEventListener("click", () => {
    bodyElement.classList.toggle("body--greyBackground");
    aboutMeElement.classList.toggle("darkAboutMe");
    buttonElement.classList.toggle("darkButton");
    headerElement.classList.toggle("darkHeader");

    buttonElement.innerText = bodyElement.classList.contains("body--greyBackground") ? "Białe tło" : "Szare tło"
});
