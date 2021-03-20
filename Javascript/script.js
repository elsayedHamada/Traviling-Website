// setup for Getting Elements
const getElement = function(element){
    return document.querySelector(element);
};
// Get Elements
const humburgerMenu = getElement(".humburger-menu");
const nav = getElement("nav");

//Take Actions
humburgerMenu.addEventListener("click" , function(){
    nav.classList.toggle("open")
})
