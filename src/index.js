import './style.css';
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import bougatsa from '/home/mdrenth/Documents/the_odin_project/restaurantpage/src/Bougatsa.png';

loadHome();

const content = document.querySelector("#content");
const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const contactButton = document.querySelector("#contact-button");

function createButtons() {
const content = document.querySelector("#content");
const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const contactButton = document.querySelector("#contact-button");

function clearPage() {
    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild);
    }
}


homeButton.addEventListener("click", function (){
    clearPage();
    loadHome();
    createButtons();
    console.log("Home")
})

menuButton.addEventListener("click", function (){
    clearPage();
    loadMenu();
    createButtons();
    console.log("Menu")
})

contactButton.addEventListener("click", function (){
    clearPage();
    loadContact();
    createButtons();
})

}

createButtons();



console.log("This is working")

