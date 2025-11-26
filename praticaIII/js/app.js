// Inline Javascript

// Document element
const htmlElement = document.documentElement;

// Menu class
const menu = document.querySelector("#main-nav");
// Hamburguer button class
const hamburguer = document.querySelector(".hamburguer");
// Menu item bar class
const barsHamburguer = document.querySelectorAll(".bar");
// Menu item close class
const closeHamburguer = document.querySelector(".close");



// Color scheme button
const colorSchemeButtons = document.querySelectorAll(".color-mode-row, .color-mode-col");
// Color scheme light icons
const colorSchemeLightIcons = document.querySelectorAll("#light-mode-row, #light-mode-col");
// Color scheme dark icons
const colorSchemeDarkIcons = document.querySelectorAll("#dark-mode-row, #dark-mode-col");
// Color scheme System icons
const colorSchemeSystemIcons = document.querySelectorAll("#system-mode-row, #system-mode-col");

// PageYOffSet
let prevScrollpos = window.pageYOffset;

// Retrieving data
let colorScheme = localStorage.getItem('color-scheme');


// function to turn on/off the menu
function toggleMenu() {
  console.log(barsHamburguer, closeHamburguer);

  if (hamburguer.getAttribute("aria-expanded") === "true") {
    // Turn menu off
    menu.classList.remove("active");
    // Set hamburguer aria-expanded attibute to false
    hamburguer.setAttribute("aria-expanded", false);
  } else {
    // Turn menu on
    menu.classList.add("active");
    // Set aria-expanded attibute to true
    hamburguer.setAttribute("aria-expanded", true);
  }

  // Update menu visibility
  showHiddenMenu();

  // For developer analysis
  console.log(
    "function toggleMenu()\n",
    "hamburguer.getAttribute\(\"aria-expanded\"\):", hamburguer.getAttribute("aria-expanded"), "\n",
    "hamburguer.getAttribute\(\"aria-expanded\"\) === \"true\":", hamburguer.getAttribute("aria-expanded") === "true"
  );
}

// Verify the menu aria-expanded attribute
function showHiddenMenu() {
  if (hamburguer.getAttribute("aria-expanded") === "true") {
    // Turn menu off
    menu.classList.add("active");
    // Set bar display style to none
    barsHamburguer.forEach((barHamburguer) => {
      barHamburguer.style.display = "none";
    });
    // Set close display style to block
    closeHamburguer.style.display = "block";
    // Set title hamburguer menu
    hamburguer.setAttribute('title', 'Ocultar menu');    
  } else {
    // Turn menu on
    menu.classList.remove("active");
    // Set bars display style to block
    barsHamburguer.forEach((barHamburguer) => {
      barHamburguer.style.display = "block";
    });
    // Set close display style to none
    closeHamburguer.style.display = "none";
    // Set title hamburguer menu
    hamburguer.setAttribute('title', 'Mostrar menu');
  }
}

// Hamburguer menu button cliked!
function hamburguerClicked(){    
    console.log(
    "Hamburguer menu button clicked!\n",
    "hamburguer.getAttribute\(\"aria-expanded\"\):", hamburguer.getAttribute("aria-expanded"), "\n",
    "hamburguer.getAttribute\(\"aria-expanded\"\) === \"true\":", hamburguer.getAttribute("aria-expanded") === "true"
    );    
    toggleMenu();
}

// set color scheme
function setColorScheme(displayType) {
  let titleColorScheme;

  if (colorScheme) {
    console.log(`Stored: ${colorScheme}.`);
    console.log('Light Icons', colorSchemeLightIcons);
    console.log('Dark Icons', colorSchemeDarkIcons);
    console.log('System Icons', colorSchemeSystemIcons);

    switch(colorScheme) {
      case 'light-mode':
        colorSchemeLightIcons.forEach(colorSchemeLightIcon => {
          colorSchemeLightIcon.style.display = displayType;
        })
        titleColorScheme = 'Modo claro';
        // Set the theme
        htmlElement.setAttribute('data-theme', 'light-mode');        
        break;

      case 'dark-mode':
        colorSchemeDarkIcons.forEach(colorSchemeDarkIcon => {
          colorSchemeDarkIcon.style.display = displayType;
        })
        titleColorScheme = 'Modo escuro';
        // Set the theme
        htmlElement.setAttribute('data-theme', 'dark-mode');             
        break;        

      case 'system-mode':
      default:
        colorSchemeSystemIcons.forEach(colorSchemeSystemIcon => {
          colorSchemeSystemIcon.style.display = displayType;
        });    
        titleColorScheme = 'Modo do dispositivo';    
        // Set the theme
        htmlElement.removeAttribute('data-theme');             
        break;        
    }

    colorSchemeButtons.forEach(colorSchemeButton => {
      colorSchemeButton.setAttribute('title', titleColorScheme);
    });     

  } else {
    console.log('Don\'t stored!');
    colorScheme = "system-mode";
  }  
  
  // Storing data
  localStorage.setItem('color-scheme',colorScheme);

}

function setColorSchemeClicked() {
  setColorScheme('none');
  if (colorScheme) {
    switch (colorScheme) {
      case 'light-mode':
        colorScheme = 'dark-mode';               
        break;
      
      case 'dark-mode':
        colorScheme = "system-mode";        
        break;
        
      case 'system-mode':
        colorScheme = "light-mode";
        break;

      default:
        colorScheme = 'system-mode';        
        break;
    }
  }
   
  setColorScheme('block');
}

// Listen for an event after loading DOM content.
document.addEventListener("DOMContentLoaded", (event) => {
  menu.addEventListener("click", function (e) {
    console.log(`${e.target} - ${e.target.nodeName}`);

    // Check if the clicked element (e.target) is a link
    if (e.target && e.target.nodeName === "A") {
      // Default action would not been taken
      // This is used to process data before calling an anchoring target
      e.preventDefault();

      // Get de action from the data attribute
      const action = e.target.getAttribute("data-action");

      // Perform different actions based on the clicked item
      switch (action) {
        case "inicio":
          console.log("Inicio link clicked! Load inicio  content.");
          // To navigate for target
          window.location.href = e.target;
          break;
        case "projetos":
          console.log("Projetos link ckicked! Load about content.");
          // To navigate for target
          window.location.href = e.target;
          break;
        case "cadastro":
          console.log("Cadastro link clicked! Load contact content.");
          // To navigate for target
          window.location.href = e.target;
          break;

        default:
          console.log(`${action} link clicked! Load ${action} content.`);
          break;

      }
    }
  });

  // Change the top position of the navigation bar while scrolling.
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    // Computed style of the html element
    const computedStyle = window.getComputedStyle(htmlElement);  
    // Value of scroll-padding-top
    const scrollPaddingTopValue = computedStyle.scrollPaddingTop;  

    const heightRef = document.querySelector('.navbar').offsetHeight;

    if (prevScrollpos > currentScrollPos ) {
      // Show navbar
      document.querySelector('.navbar').style.top = "0px";
    } else {
      // Hide navbar 
      if (currentScrollPos > heightRef) {         
        document.querySelector('.navbar').style.top = `-${heightRef}px`;
        console.log(1);
      } else {
        document.querySelector('.navbar').style.top = `${Math.round(parseInt( ( - currentScrollPos)))}px`;
        console.log(2);
        //document.querySelector('.navbar').style.top = `${0}px`;
      }
    }
    prevScrollpos = currentScrollPos;
    console.log(currentScrollPos,`${scrollPaddingTopValue}`,`${Math.round(parseInt(heightRef -( currentScrollPos - heightRef)))}px`);
    console.log(window.getComputedStyle(document.querySelector('.navbar')).height);
    console.log(document.querySelector('.navbar').offsetHeight);
    
  }    

});

// Hello message!
console.log("Hi! This is the PraticaIII Project!");

// Hamburguer Menu button click event listener
hamburguer.addEventListener("click", hamburguerClicked);


console.log(colorSchemeButtons);
// Color scheme button click event listener 
colorSchemeButtons.forEach(colorSchemeButton => {
  colorSchemeButton.addEventListener('click', setColorSchemeClicked);
});

// Update menu visibility
showHiddenMenu();

// Update color scheme visibility
setColorScheme('block');

