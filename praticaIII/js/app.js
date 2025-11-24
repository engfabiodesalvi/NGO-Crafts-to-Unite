// Inline Javascript

// Menu class
const menu = document.querySelector("#main-nav");
// Hamburguer button class
const hamburguer = document.querySelector(".hamburguer");
// Menu item bar class
const barsHamburguer = document.querySelectorAll(".bar");
// Menu item close class
const closeHamburguer = document.querySelector(".close");

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
    "Hamburguer menu button clicked!",
    hamburguer.getAttribute("aria-expanded"),
    hamburguer.getAttribute("aria-expanded") === "true"
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
  } else {
    // Turn menu on
    menu.classList.remove("active");
    // Set bars display style to block
    barsHamburguer.forEach((barHamburguer) => {
        barHamburguer.style.display = "block";
    });
    // Set close display style to none
    closeHamburguer.style.display = "none";
  }
}

// Hello message!
console.log("Hi! This is the PraticaIII Project!");

// Update menu visibility
showHiddenMenu();

console.log(
  "Hamburguer menu button clicked!",
  hamburguer.getAttribute("aria-expanded"),
  hamburguer.getAttribute("aria-expanded") === "true"
);

// Menu button click event listener
hamburguer.addEventListener("click", toggleMenu);
