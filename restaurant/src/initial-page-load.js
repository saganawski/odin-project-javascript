
const main = ()=>{
    const content = document.getElementById('content');
    
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");

    document.body.insertBefore(main,content);

    document.body.insertBefore(loadHeader(), content );
    
    main.appendChild(loadHomeDiv());
}

const loadHomeDiv = () =>{
    const home = document.createElement('div');
    home.classList.add("home");

    const title = document.createElement('p');
    title.innerText = "Best Pizza Ingrediants";
    home.appendChild(title);

    const subTitle = document.createElement('p');
    subTitle.innerText = "Made Fresh Every Day";
    
    home.appendChild(subTitle);

    const freshImage = document.createElement('img');
    freshImage.src = "images/fresh-ingredants.jpg";

    freshImage.setAttribute("alt", "Cutting Ingrediant");

    home.appendChild(freshImage);

    const lastTitle = document.createElement("p");
    lastTitle.innerText = "Come vist now";

    home.appendChild(lastTitle);

    return home;

}

const loadMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add("menu");

    const title = document.createElement('p');
    title.innerText = "This is the Mendu";
    menu.appendChild(title);

    const subTitle = document.createElement('p');
    subTitle.innerText = "Eat up";
    
    menu.appendChild(subTitle);

    const freshImage = document.createElement('img');
    freshImage.src = "images/pizza-menu.jpg";

    freshImage.setAttribute("alt", "Menu");

    menu.appendChild(freshImage);

    return menu;
}

const loadContact = () => {
    const contact = document.createElement('div');
    contact.classList.add("contact");

    const title = document.createElement('p');
    title.innerText = "Phone: 555-555-5555";
    contact.appendChild(title);

    const subTitle = document.createElement('p');
    subTitle.innerText = "location";
    
    contact.appendChild(subTitle);

    const freshImage = document.createElement('img');
    freshImage.src = "images/pizza-map.jpg";

    freshImage.setAttribute("alt", "Map");

    contact.appendChild(freshImage);

    return contact;
}

 const loadHeader = () => {
     const header = document.createElement("header");
     header.classList.add("header");

     const title = document.createElement("h1");
    title.innerText = "Pizza Boy!!"
     header.appendChild(title);

     const nav = document.createElement('nav');
     
     const homeButton = document.createElement("button");
     homeButton.classList.add("button-nav");
     homeButton.classList.add("active");
     homeButton.innerText = "Home";
    homeButton.setAttribute("data-name","home");

     buttonListener(homeButton);
     

     const menuButton = document.createElement("button");
     menuButton.classList.add("button-nav");
    menuButton.innerText = "Menu";
    menuButton.setAttribute("data-name","menu");
     buttonListener(menuButton);
     

     const contactButton = document.createElement("button");
     contactButton.classList.add("button-nav");
     contactButton.innerText = "Contact";
     contactButton.setAttribute("data-name","contact");
     buttonListener(contactButton);

     nav.appendChild(homeButton);
     nav.appendChild(menuButton);
     nav.appendChild(contactButton);

     header.appendChild(nav);

     return header;

 }

 const buttonListener = (element) => {
    element.addEventListener("click", () => {
        removeActiveClassFromNavButtons();
        //add active
        element.classList.add("active");
   
        //remove current element
        const main = document.getElementById("main");
        main.removeChild(main.firstChild);
    
        updateContentInMain(element, main);
    })
 }

 const removeActiveClassFromNavButtons = () => {
    const buttons = document.getElementsByClassName("button-nav");
    Array.from(buttons).forEach(b => b.setAttribute("class", "button-nav"));
 }

 const updateContentInMain = (element, main) => {
    const contentType = element.dataset.name;
    if (contentType === "contact") {
        main.appendChild(loadContact());
    } else if (contentType === "menu") {
        main.appendChild(loadMenu());
    } else if (contentType === "home") {
        main.appendChild(loadHomeDiv());
    }
}

export {loadHomeDiv, loadMenu, loadContact,main}


