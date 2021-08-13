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

function createMenu() {
    const menuDiv = document.createElement("div");
    menuDiv.id = "menu-div";

    const bougatsaDiv = document.createElement("div");
    bougatsaDiv.id = "bougatsa-div";
    const bougatsaText = document.createElement("p");
    bougatsaText.id = "bougatsa-p"
    bougatsaText.textContent = "Bougatsa.................3$"

    bougatsaDiv.appendChild(bougatsaText);

    const spanakopitaDiv = document.createElement("div");
    spanakopitaDiv.id = "spanakopita-div";
    const spanakopitaText = document.createElement("p");
    spanakopitaText.id = "spanakopita-p";
    spanakopitaText.textContent = "Spanakopita....................4$"

    spanakopitaDiv.appendChild(spanakopitaText);

    menuDiv.appendChild(bougatsaDiv);
    menuDiv.appendChild(spanakopitaText);

    return menuDiv;


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

function loadMenu() {
    const content = document.querySelector("#content")

    content.appendChild(createNavbar());
    content.appendChild(createMenu());
    content.appendChild(createFooter());
}

export default loadMenu;