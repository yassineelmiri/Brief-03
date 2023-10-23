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
