/*---- Toggle Menu ----*/

let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if ( toggleNavStatus === false ){
        getSidebar.style.width = "188px";
        getSidebarUl.style.visibility = "visible";
        getSidebarUl.style.opacity = "1";

        for ( i = 0; i < getSidebarLinks.length; i++ ){
            getSidebarLinks[i].style.opacity = "1";
        }
    
        toggleNavStatus = true;
    } 

    else if ( toggleNavStatus === true ){
        getSidebar.style.width = "0px";
        getSidebarUl.style.visibility = "hidden";
        getSidebarUl.style.opacity = "0";


        for ( i = 0; i < getSidebarLinks.length; i++ ){
            getSidebarLinks[i].style.opacity = "0";
        }
    
        toggleNavStatus = false;
    }
}


/*---- Maak Functies voor menu acties ----*/

// add Eventlistener aan hamburger om menu te openen en sluiten met mouse-over
const attachEventToHamburgerMenu = function() {
    let hamburgerMenu = document.getElementById("button-toggle-nav");
    hamburgerMenu.addEventListener("mouseover", function(){ toggleNav() });
}

// add Eventlistener aan sidebar om menu te sluiten met een click
const attachEventToSideBar = function() {
    let sideBar = document.getElementById("aside");
    sideBar.addEventListener('click', function(){ toggleNav() });
}


/*---- Maak Functies voor klik acties, color-toggle en keypresses ----*/

let buttons = document.getElementsByTagName("a");
let newBgColor;
let oldBgColor = "start";
let myBody = document.getElementById("body");


// Functie om Kleur te wisselen met klikken
const eventClickToChangeColor = function() {
    for ( i = 0; i < buttons.length; i++ ) {
        buttons[i].addEventListener("click", function() { 
            newBgColor = this.id;
            myBody.classList.replace(oldBgColor, newBgColor);
            oldBgColor = newBgColor;
            
            // Colorname veranderen in body (H1)
            document.querySelector('h1').innerHTML = newBgColor;
        
            // Radio button check bij geselecteerde kleur
            document.querySelector("input[value="+ newBgColor + "]").checked = true;
        }); 
    }
} 

// Functie om kleur te wisselen met het keyboard
const eventPressNumberToChangeColor = function() {
    document.addEventListener("keypress", function(event) {
        if(event.key >= 1 && event.key <= 9 ) {
            newBgColor = (buttons[event.key - 1].id);
            myBody.classList.replace(oldBgColor, newBgColor);
            oldBgColor = newBgColor;

            // Colorname veranderen in body (H1)
            document.querySelector('h1').innerHTML = newBgColor;

            // Radio button check bij geselecteerde kleur
            document.querySelector("input[value="+ newBgColor + "]").checked = true;
        }
    });
}


/*---- Functies uitvoeren ----*/

attachEventToHamburgerMenu();
attachEventToSideBar();
eventClickToChangeColor();
eventPressNumberToChangeColor();