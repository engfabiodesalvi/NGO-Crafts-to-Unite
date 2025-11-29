const htmlElement=document.documentElement;const computedStyle=getComputedStyle(htmlElement);const menu=document.querySelector("#main-nav");const hamburguer=document.querySelector(".hamburguer");const barsHamburguer=document.querySelectorAll(".bar");const closeHamburguer=document.querySelector(".close");const ulHighlightsCard=document.querySelector(".cards");const highlightsCardRepository=`{
  "highlight1": {
    "img": {
      "src": "./img/earl-wilcox--aebrWVmr80-unsplash-min.jpg",
      "width": 200,
      "alt": "Projeto de capacitação"
    },
    "h3": "Capacitação em vasos de barro",
    "p": "Curso gratuito para a comunidade com certificação."
  },
  "highlight2": {
    "img": {
      "src": "./img/cristi-tohatan-XIBIC21QeZQ-unsplash-min.jpg",
      "width": 200,
      "alt": "Equipe voluntária"
    },
    "h3": "Rede de voluntários",
    "p": "Voluntariado local e remoto para apoio em design e vendas."
  }
}`;const ulCardsProject=document.querySelector(".cards-project");const cardsProjectRepository=`{
  "project1": {
    "img": {
      "src": "../img/quino-al-jsWVItac5Tw-unsplash-min.jpg",
      "width": 200,
      "alt": "Confecção de vaso de barro - 1"
    },
    "h6": "Projeto 1",
    "p": "Modelagem de vasos de barro - 1."
  },
  "project2": {
    "img": {
      "src": "../img/annie-spratt-TywjkDHf0Ps-unsplash-min.jpg",
      "width": 200,
      "alt": "Modelagem de objetos em biscuit."
    },
    "h6": "Projeto 2",
    "p": "Modelagem de objetos em biscuit."
  },
  "project3": {
    "img": {
      "src": "../img/earl-wilcox--aebrWVmr80-unsplash-min.jpg",
      "width": 200,
      "alt": "Confecção de vasos de barro - 2."
    },
    "h6": "Projeto 3",
    "p": "Modelagem de vasos de barro - 2."
  },
  "project4": {
    "img": {
      "src": "../img/jessica-tan-i0bSx789ITU-unsplash-min.jpg",
      "width": 200,
      "alt": "Cozinha divertida."
    },
    "h6": "Projeto 4",
    "p": "Cozinha divertida."
  },
  "project5": {
    "img": {
      "src": "../img/juego-tangram-diferentes-tipos-juego-de-madera-min.jpg",
      "width": 200,
      "alt": "Jogos divertidos de montar (tangrans de vários formatos)."
    },
    "h6": "Projeto 5",
    "p": "Jogos divertidos de montar (tangrans de vários formatos)."
  },
  "empty": {}       
}`
const projectSelect=document.querySelector("#project-select");const colorSchemeButtons=document.querySelectorAll(".color-mode-row, .color-mode-col");const colorSchemeLightIcons=document.querySelectorAll("#light-mode-row, #light-mode-col");const colorSchemeDarkIcons=document.querySelectorAll("#dark-mode-row, #dark-mode-col");const colorSchemeContrastIcons=document.querySelectorAll("#contrast-mode-row, #contrast-mode-col");const colorSchemeSystemIcons=document.querySelectorAll("#system-mode-row, #system-mode-col");const textColorThemeStatus=document.querySelectorAll("#theme-state-row, #theme-state-col");let prevScrollpos=window.pageYOffset;let colorScheme=localStorage.getItem('color-scheme');const isMobileScreen=window.matchMedia('(min-width: 480px)');function toggleMenu(){if(hamburguer.getAttribute("aria-expanded")==="true"){menu.classList.remove("active");menu.setAttribute('aria-hidden',!0);hamburguer.setAttribute("aria-expanded",!1);hamburguer.setAttribute('aria-label','Abrir menu')}else{menu.classList.add("active");menu.setAttribute('aria-hidden',!1);hamburguer.setAttribute("aria-expanded",!0);hamburguer.setAttribute('aria-label','Fechar menu')}
showHiddenMenu()}
function showMenu(){menu.classList.add("active");barsHamburguer.forEach((barHamburguer)=>{barHamburguer.style.display="none"});closeHamburguer.style.display="block";hamburguer.setAttribute('title','Ocultar menu')}
function hiddenMenu(){menu.classList.remove("active");barsHamburguer.forEach((barHamburguer)=>{barHamburguer.style.display="block"});closeHamburguer.style.display="none";hamburguer.setAttribute('title','Mostrar menu')}
function showHiddenMenu(){if(hamburguer.getAttribute("aria-expanded")==="true"){showMenu()}else{hiddenMenu()}}
function hamburguerClicked(){toggleMenu()}
function setColorScheme(displayType){let titleColorScheme;if(!colorScheme){colorScheme="system-mode"}
console.log(textColorThemeStatus);switch(colorScheme){case 'light-mode':colorSchemeLightIcons.forEach(colorSchemeLightIcon=>{colorSchemeLightIcon.style.display=displayType})
titleColorScheme='Modo claro';htmlElement.setAttribute('data-theme','light-mode');textColorThemeStatus.forEach(textColorElement=>{textColorElement.innerHTML='Tema atual: modo claro'});colorSchemeButtons.forEach(colorSchemeButton=>{colorSchemeButton.setAttribute('aria-label','Alterar para modo escuro')});break;case 'dark-mode':colorSchemeDarkIcons.forEach(colorSchemeDarkIcon=>{colorSchemeDarkIcon.style.display=displayType})
titleColorScheme='Modo escuro';htmlElement.setAttribute('data-theme','dark-mode');textColorThemeStatus.forEach(textColorElement=>{textColorElement.innerHTML='Tema atual: modo escuro'});colorSchemeButtons.forEach(colorSchemeButton=>{colorSchemeButton.setAttribute('aria-label','Alterar para modo contraste')});break;case 'contrast-mode':colorSchemeContrastIcons.forEach(colorSchemeDarkIcon=>{colorSchemeDarkIcon.style.display=displayType})
titleColorScheme='Modo contraste';htmlElement.setAttribute('data-theme','contrast-mode');textColorThemeStatus.forEach(textColorElement=>{textColorElement.innerHTML='Tema atual: modo contraste'});colorSchemeButtons.forEach(colorSchemeButton=>{colorSchemeButton.setAttribute('aria-label','Alterar para modo do sistema')});break;case 'system-mode':default:colorSchemeSystemIcons.forEach(colorSchemeSystemIcon=>{colorSchemeSystemIcon.style.display=displayType});titleColorScheme='Modo do dispositivo';htmlElement.removeAttribute('data-theme');textColorThemeStatus.forEach(textColorElement=>{textColorElement.innerHTML='Tema atual: modo do sistema'});colorSchemeButtons.forEach(colorSchemeButton=>{colorSchemeButton.setAttribute('aria-label','Alterar para modo claro')});break}
colorSchemeButtons.forEach(colorSchemeButton=>{colorSchemeButton.setAttribute('title',titleColorScheme)});localStorage.setItem('color-scheme',colorScheme)}
function setColorSchemeClicked(){setColorScheme('none');if(colorScheme){switch(colorScheme){case 'light-mode':colorScheme='dark-mode';break;case 'dark-mode':colorScheme='contrast-mode';break;case 'contrast-mode':colorScheme='system-mode';break;case 'system-mode':colorScheme="light-mode";break;default:colorScheme='system-mode';break}}
setColorScheme('block')}
function AddItemsHighlightsSection(){const parsedHighlightsCard=JSON.parse(highlightsCardRepository);let liHighlightsCard="";for(const key in parsedHighlightsCard){liHighlightsCard+=`
      <li class="card" tabindex="0" role="button" aria-label="Ver detalhes de ${parsedHighlightsCard[key].h3}">
          <img src="${parsedHighlightsCard[key].img.src}" width="${parsedHighlightsCard[key].img.width}" alt="${parsedHighlightsCard[key].img.alt}"
                loading="lazy">
          <div>
              <h3>${parsedHighlightsCard[key].h3}</h3>
              <p>${parsedHighlightsCard[key].p}</p>
              <div class="card-item">                
                  <a href="#">Saiba mais</a>
              </div>
          </div>
      </li>`}
ulHighlightsCard.innerHTML=liHighlightsCard}
function AddItemsProjectsSection(){const parsedProjectsCard=JSON.parse(cardsProjectRepository);let liProjectsCard="";for(const key in parsedProjectsCard){if(key!=="empty"){liProjectsCard+=`
      <li class="card-project" tabindex="0" role="button" aria-label="Ver detalhes do ${parsedProjectsCard[key].h6}">
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
      </li>`}else{liProjectsCard+=`
      <li class="card-project"> 
            </li>`}}
ulCardsProject.innerHTML=liProjectsCard}
function addItemsProjectSelect(){const parsedProjectsCard=JSON.parse(cardsProjectRepository);let optionProject="";for(const key in parsedProjectsCard){if(key!=="empty"){optionProject+=`
      <option value="${key}">${parsedProjectsCard[key].h6}</option>`}}
optionProject+=`<option value="ong">Deixar a critério da ONG</option>`
projectSelect.innerHTML=optionProject}
document.addEventListener("DOMContentLoaded",(event)=>{menu.addEventListener("click",function(e){if(e.target&&e.target.nodeName==="A"){e.preventDefault();const action=e.target.getAttribute("data-action");switch(action){case "inicio":window.location.href=e.target;break;case "projetos":window.location.href=e.target;break;case "cadastro":window.location.href=e.target;break;default:break}}});window.onscroll=function(){let currentScrollPos=window.pageYOffset;const heightRef=document.querySelector('.navbar').offsetHeight;if(prevScrollpos>currentScrollPos){document.querySelector('.navbar').style.top="0px"}else{if(currentScrollPos>heightRef){document.querySelector('.navbar').style.top=`-${heightRef}px`}else{document.querySelector('.navbar').style.top=`${-currentScrollPos}px`}}
if(hamburguer.getAttribute("aria-expanded")==="true"){toggleMenu()}
prevScrollpos=currentScrollPos}});hamburguer.addEventListener("click",hamburguerClicked);colorSchemeButtons.forEach(colorSchemeButton=>{colorSchemeButton.addEventListener('click',setColorSchemeClicked)});showHiddenMenu();setColorScheme('block');if(ulHighlightsCard)
AddItemsHighlightsSection();if(ulCardsProject)
AddItemsProjectsSection();if(projectSelect)
addItemsProjectSelect();(function(){window.onresize=setAriaAttributesNavMenu;window.onload=setAriaAttributesNavMenu;function setAriaAttributesNavMenu(){let innerWidth=window.innerWidth;let innerHeight=window.innerHeight;if(innerWidth<=480){hamburguer.removeAttribute('aria-hidden');menu.setAttribute('aria-hidden',!0)}else{menu.removeAttribute('aria-hidden');hamburguer.setAttribute('aria-hidden','true');hamburguer.setAttribute('aria-expanded','false')}}})()