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

function createContact(){
    const contactDiv = document.createElement("div");
    contactDiv.id = "contact-div";

    const contactText = document.createElement("p");
    contactText.id = "contact-text";
    contactText.textContent = "Please find us: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,";


    contactDiv.appendChild(contactText);
    

    return contactDiv

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

function loadContact() {
    const content = document.querySelector("#content")

    content.appendChild(createNavbar());
    content.appendChild(createContact());
    content.appendChild(createFooter());
}

export default loadContact;