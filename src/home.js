function createNavbar() {
    const navbar = document.createElement("div");
    navbar.id = "nav-div";

    const homeButton = document.createElement("button");
    homeButton.id = "home-button";
    homeButton.textContent = "Home";

    const menuButton = document.createElement("button");
    menuButton.id = "menu-button";
    menuButton.textContent = "Menu";


    const contactButton = document.createElement("button");
    contactButton.id = "contact-button";
    contactButton.textContent = "Contact";


    navbar.appendChild(homeButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(contactButton);

    return navbar;
    
}

function createMain(){
    const mainDiv = document.createElement("div");
    mainDiv.id = "main-div";

    const mainText = document.createElement("p");
    mainText.id = "main-text";
    mainText.textContent = "This is all the information about the restaurant";

    const bougatsaImage = document.createElement("img");
    bougatsaImage.src = "https://upload.wikimedia.org/wikipedia/commons/4/4f/Bougatsa.png";
    bougatsaImage.id = "bougatsa-image";

    mainDiv.appendChild(mainText);
    mainDiv.appendChild(bougatsaImage);

    return mainDiv

}

function createFooter(){
    const footer = document.createElement("div");
    footer.id = "footer-div";


    const addressText = document.createElement("p");
    addressText.id = "address-p";
    addressText.textContent = "Some Address";

    const contactText = document.createElement("p");
    contactText.id = "contact-p";
    contactText.textContent = "Some Contact";

    const openingText = document.createElement("p");
    openingText.id = "opening-p";
    openingText.textContent = "Some Opening";

    footer.appendChild(addressText);
    footer.appendChild(contactText);
    footer.appendChild(openingText);

    return footer
}

function loadHome() {
    const content = document.querySelector("#content")

    content.appendChild(createNavbar());
    content.appendChild(createMain());
    content.appendChild(createFooter());
}

export default loadHome;