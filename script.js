//définir la la largeur de la sidebar a 100vw  et faire un overflow hidden

function openNav(){
    document.getElementById("mySidebar").style.width="100vw";
    document.querySelector("body").style.overflow= "hidden"

}

//définir la la largeur de la sidebar a 0  et faire un overflow auto

function closeNav(){
    document.getElementById("mySidebar").style.width="0";
    document.querySelector("body").style.overflow= "auto"

}


// script.js
const questionButtons = document.querySelectorAll('.question-button');

questionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});
//logine
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if( '00000000' <= password ){
        if (username === 'yassine' && password === '00000000') {
            // Redirigez l'utilisateur vers la page d'accueil ou effectuez d'autres actions
            window.location.href = 'index.html';
        } else {
            errorMessage.textContent = 'Nom d\'utilisateur ou mot de passe incorrect.';
        }}
        else {
            errorMessage.textContent = 'mot de passe inf de 8 caracter.'
        }
    });
});

