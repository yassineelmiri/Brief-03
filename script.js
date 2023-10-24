//définir la la largeur de la sidebar a 100vw  et faire un overflow hidden

function openNav() {
  document.getElementById("mySidebar").style.width = "100vw";
  document.querySelector("body").style.overflow = "hidden";
}

//définir la la largeur de la sidebar a 0  et faire un overflow auto

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.querySelector("body").style.overflow = "auto";
}
/*les variable de media 588*/
const titer = document.querySelector('h1');
const home = document.querySelector('.home');
const homePH = document.querySelector('.home p, .home h1 ');
const homeLR = document.querySelector('.home .left, .home .right');
const homed = document.querySelector('.home .right');
const Statistiques = document.querySelector('.statistiques');
const Statistiques1 = document.querySelector('.statistiques h2 ');
const Statistiques2 = document.querySelector('.statistiques p');
const About = document.querySelector('.about');
const About1 = document.querySelector('.about .image, .about .content');
const List = document.querySelector('.list_box, .deco-list ');
const List1 = document.querySelector('.box, .deco ');




/*les variable de media 935*/
// const Header = document.querySelector('header');
// const LinkB = document.querySelector('.link_buttons');
// const LinkM = document.querySelector('menu_link');
// const SidebarM = document.querySelector('.sidebar, #main ');
// const Sidebar = document.querySelector('.sidebar');
// const SidebarImg = document.querySelector('.sidebar img, #main img');
// const SidebarA= document.querySelector('.sidebar a ');
// const SidebarClos = document.querySelector('.sidebar .closebtn ');
// const OpenImg = document.querySelector('.openbtn');
// const Open = document.querySelector('.about .image, .about .content');
// const SidebarHover = document.querySelector('.sidebar a:hover');
// const openHover = document.querySelector('.openbtn:hover');

/*responsive de media*/

const media1 = window.matchMedia("(max-width:935px)");
const media2 = window.matchMedia("(max-width:588px)");



/*Fonction resp */
window.onload = function(){
  window.addEventListener('resize',function(){

      if(media2.matches){
        titer.style.cssText = "font-size: 30px;";
        home.style.cssText = "margin:25px ; flex-direction:column-reverse ;height:auto ;padding-bottom:100px;";
        homePH.style.cssText = "margin: 0";
        homeLR.style.cssText = "width:100% ; height:fit-content;";
        homed.style.cssText = "height:auto;";
        Statistiques.style.cssText = "bottom: -100px;";
        Statistiques1.style.cssText = "font-size: 15px;";
        Statistiques2.style.cssText = "font-size: 12px;";
        About.style.cssText = "flex-direction: column;";
        About1.style.cssText = "width: 100%;";
        List.style.cssText = "display: flex ;flex-direction: column ;align-items: center;";
        List1.style.cssText = "width: 100%;";
      }else if(media1.matches){

        // Header.style.cssText = "padding: 20px; margin: 0;height: auto;";
        // LinkB.style.cssText = "display: none;";
        // LinkM.style.cssText = "display: none;";
        // SidebarM.style.cssText = "display: block;";
        // Sidebar.style.cssText = " height: 100%;width: 0;position: fixed;z-index: 1000;top: 0;left: 0;background-color: #111;overflow-x: hidden;padding-top: 60px;transition: 0.5s;display: flex;flex-direction: column;";
        // SidebarImg.style.cssText = "width: 20px;";
        // SidebarA.style.cssText = "padding: 15px;font-size: 15px;color: #fff;transform: 0.3s;";
        // SidebarClos.style.cssText = "position: absolute;top: 20px;right: 20px;cursor: pointer;";
        // OpenImg.style.cssText = "width: 20px;margin-right: 10px;";
        // Open.style.cssText = "background-color: #f26440;border: 0;display: flex;align-items: center;color: #fff;font-size: 15px;padding: 10px 15px;border-radius: 5px;box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);cursor: pointer;transition: 0.5s;";
        // SidebarHover.style.cssText = "background-color: #f26440;";
        // openHover.style.cssText = " background-color: #111;";
       
      }




  })
}



// script.js
const questionButtons = document.querySelectorAll(".question-button");

questionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;

    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});

//logine
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const errorMessage = document.getElementById("error-message");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if ("00000000" <= password) {
      if (username === "yassine" && password === "00000000") {
        // Redirigez l'utilisateur vers la page d'accueil ou effectuez d'autres actions
        window.location.href = "index.html";
      } else {
        errorMessage.textContent =
          "Nom d'utilisateur ou mot de passe incorrect.";
      }
    } else {
      errorMessage.textContent = "mot de passe inf de 8 caracter.";
    }
  });
});

/*contact */
function verifierNonTexte() {
  // Récupérez la valeur entrée par l'utilisateur
  var usernam = document.getElementById("usernam").value;

  // Utilisez une expression régulière pour vérifier si la valeur ne contient que des chiffres (et éventuellement d'autres caractères non alphabétiques)

  if (isNaN(usernam)) {
  } else {
    document.getElementById("resultat").textContent =
      "La valeur ne contient pas de texte.";
  }
}
//contact email

/*function verifierNonTexte() {
    // Récupérez la valeur entrée par l'utilisateur
    var mail = document.getElementById("valid").value;
    var mailRegex = /^[a-zA-Z][a-zA-Z0-9-_.]+@[a-zA-Z0-9]{2,}.[a-zA-Z0-9]{2,}$/;
    // Utilisez une expression régulière pour vérifier si la valeur ne contient que des chiffres (et éventuellement d'autres caractères non alphabétiques)
    
    if (mail.match(mailRegex)) { 
        
        
    } else {

        document.getElementById("resultatemail").textContent = "La valeur ne contient pas de texte.";
   
    }
}*/

let email_input = document.getElementsByClassName("envo");

for (let i = 0; i <= email_input.length; i++) {
  email_input[i].addEventListener("invalid", () => {
    input_error(email_input[i]);
  });

  email_input[i].addEventListener("input", () => {
    input_error(email_input[i]);
  });
}
console.log(email_input[i]);

function input_error(x) {
  if (x.validity.valueMissing) {
    x.setCustomValidity("Vous n'avez saisi aucune donnée dans ce champ.");
  } else if (x.validity.typeMismatch) {
    x.setCustomValidity("Données invalides");
  } else {
    x.setCustomValidity("");
    return true;
  }
  document.getElementById("error_message").innerText = x.validationMessage;
}

