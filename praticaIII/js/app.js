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

// Unordered list Highlights Cards
const ulHighlightsCard = document.querySelector(".cards");

// Highlights card repository
const highlightsCardRepository = `{
  "highlight1": {
    "img": {
      "src": "./img/earl-wilcox--aebrWVmr80-unsplash.jpg",
      "width": 200,
      "alt": "Projeto de capacitação"
    },
    "h3": "Capacitação em vasos de barro",
    "p": "Curso gratuito para a comunidade com certificação."
  },
  "highlight2": {
    "img": {
      "src": "./img/cristi-tohatan-XIBIC21QeZQ-unsplash.jpg",
      "width": 200,
      "alt": "Equipe voluntária"
    },
    "h3": "Rede de voluntários",
    "p": "Voluntariado local e remoto para apoio em design e vendas."
  }
}`;

// Unordered list Cards Project
const ulCardsProject = document.querySelector(".cards-project");

// Cards project repository
const cardsProjectRepository = `{
  "project1": {
    "img": {
      "src": "../img/quino-al-jsWVItac5Tw-unsplash.jpg",
      "width": 200,
      "alt": "Confecção de vaso de barro - 1"
    },
    "h6": "Projeto 1",
    "p": "Modelagem de vasos de barro - 1."
  },
  "project2": {
    "img": {
      "src": "../img/annie-spratt-TywjkDHf0Ps-unsplash.jpg",
      "width": 200,
      "alt": "Modelagem de objetos em biscuit."
    },
    "h6": "Projeto 2",
    "p": "Modelagem de objetos em biscuit."
  },
  "project3": {
    "img": {
      "src": "../img/earl-wilcox--aebrWVmr80-unsplash.jpg",
      "width": 200,
      "alt": "Confecção de vasos de barro - 2."
    },
    "h6": "Projeto 3",
    "p": "Modelagem de vasos de barro - 2."
  },
  "project4": {
    "img": {
      "src": "../img/jessica-tan-i0bSx789ITU-unsplash.jpg",
      "width": 200,
      "alt": "Cozinha divertida."
    },
    "h6": "Projeto 4",
    "p": "Cozinha divertida."
  },
  "project5": {
    "img": {
      "src": "../img/juego-tangram-diferentes-tipos-juego-de-madera.jpg",
      "width": 200,
      "alt": "Jogos divertidos de montar (tangrans de vários formatos)."
    },
    "h6": "Projeto 5",
    "p": "Jogos divertidos de montar (tangrans de vários formatos)."
  },
  "empty": {}       
}`

// Project select
const projectSelect = document.querySelector("#project-select");

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

function showMenu() {
  // Turn menu on
  menu.classList.add("active");
  // Set bar display style to none
  barsHamburguer.forEach((barHamburguer) => {
    barHamburguer.style.display = "none";
  });
  // Set close display style to block
  closeHamburguer.style.display = "block";
  // Set title hamburguer menu
  hamburguer.setAttribute('title', 'Ocultar menu');  
}

function hiddenMenu() {
  // Turn menu ff
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

// Verify the menu aria-expanded attribute
function showHiddenMenu() {
  if (hamburguer.getAttribute("aria-expanded") === "true") {
    showMenu();
  } else {
    hiddenMenu();
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

  if (!colorScheme) {
    console.log('Don\'t stored!');
    
    // Defining the new color schema
    colorScheme = "system-mode";

    // Storing data
    localStorage.setItem('color-scheme',colorScheme);

  }      

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

// Function to add items to the highlights section
function AddItemsHighlightsSection() {  
  const parsedHighlightsCard = JSON.parse(highlightsCardRepository);
  console.log(parsedHighlightsCard);
  
  let liHighlightsCard = "";
  //parsedCardHighlights
  for (const key in parsedHighlightsCard) {
      liHighlightsCard += `
      <li class="card">
          <img src="${parsedHighlightsCard[key].img.src}" width="${parsedHighlightsCard[key].img.width}" alt="${parsedHighlightsCard[key].img.alt}"
                loading="lazy">
          <div>
              <h3>${parsedHighlightsCard[key].h3}</h3>
              <p>${parsedHighlightsCard[key].p}</p>
              <div class="card-item">
                  <a href="#">Saiba mais</a>
              </div>
          </div>
      </li>`
  }
  console.log(liHighlightsCard);
  ulHighlightsCard.innerHTML = liHighlightsCard;

}  

// Function to add items to the projects section
function AddItemsProjectsSection() {  
  const parsedProjectsCard = JSON.parse(cardsProjectRepository);
  console.log(parsedProjectsCard);
  
  let liProjectsCard = "";
  //parsedCardHighlights
  for (const key in parsedProjectsCard) {
    if (key !== "empty" ) {
      liProjectsCard += `
      <li class="card-project">
          <img src="${parsedProjectsCard[key].img.src}" width="${parsedProjectsCard[key].img.width}" alt="${parsedProjectsCard[key].img.alt}"
                loading="lazy">
          <div>
              <h6>${parsedProjectsCard[key].h6}</h3>
              <div>
                <p>${parsedProjectsCard[key].p}</p>
                <div class="card-project-item">
                    <a href="#" id="proj-2-doar">Doar</a>
                    <a href="#">Saiba mais</a>
                </div>
              </div>
          </div>
      </li>`
    } else {
      liProjectsCard += `
      <li class="card-project"> 
            </li>`     
    }
  }
  console.log(liProjectsCard);
  ulCardsProject.innerHTML = liProjectsCard;
}  

// Function to Add items t the project select
function addItemsProjectSelect() {
  const parsedProjectsCard = JSON.parse(cardsProjectRepository);

  let optionProject = "";
  for (const key in parsedProjectsCard) {
    if (key !== "empty" ) {
      optionProject += `
      <option value="${key}">${parsedProjectsCard[key].h6}</option>`
    }  
  }
  optionProject += `<option value="ong">Deixar a critério da ONG</option>`
  console.log(optionProject);
  projectSelect.innerHTML = optionProject;
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
      // Page scrolling up and scroll bar scrolling down.

      // Show navbar
      document.querySelector('.navbar').style.top = "0px";
    } else {
      // Hide navbar 
      if (currentScrollPos > heightRef) {         
        document.querySelector('.navbar').style.top = `-${heightRef}px`;
        //console.log(1);
      } else {
        document.querySelector('.navbar').style.top = `${-currentScrollPos}px`;
        //console.log(2);
        //document.querySelector('.navbar').style.top = `${0}px`;
      }
    }

    // Hidden menu
    //hiddenMenu();

    if (hamburguer.getAttribute("aria-expanded") === "true") {
      toggleMenu();
    }
    // Updating previous scroll position
    prevScrollpos = currentScrollPos;

    // console.log(currentScrollPos,`${scrollPaddingTopValue}`,`${Math.round(parseInt(heightRef -( currentScrollPos - heightRef)))}px`);
    // console.log(window.getComputedStyle(document.querySelector('.navbar')).height);
    // console.log(document.querySelector('.navbar').offsetHeight);
    
  };   

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

// Adding items to the highlights section
//console.log(ulHighlightsCard);
if (ulHighlightsCard)
  AddItemsHighlightsSection();

// Adding items to the projects section
//console.log(ulCardsProject);
if (ulCardsProject)
  AddItemsProjectsSection();

// Adding items to the select
if (projectSelect)
  addItemsProjectSelect();

//localStorage.removeItem('color-scheme');