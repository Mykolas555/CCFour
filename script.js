let form = document.querySelector('form');
let input = document.querySelector('input');
let outputText = document.querySelector('h4');
let tryAgainButton = document.querySelector('#tryAgain')

tryAgainButton.style.display = 'none';

function convertToCentury(event) {
    event.preventDefault();
    let year = parseInt(input.value);
    let century = Math.ceil(year / 100);
    outputText.textContent = `${century} century`;
    tryAgainButton.style.display = 'block';
    form.style.display = 'none';
}

function tryAgain () {
    tryAgainButton.style.display = 'none';
    form.style.display = 'block';
    outputText.innerHTML="";
    input.value = "";
}

form.addEventListener('submit', convertToCentury);
tryAgainButton.addEventListener('click', tryAgain);