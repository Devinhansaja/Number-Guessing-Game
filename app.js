// app.js
let ennum = Math.floor((Math.random() * 10) + 1);
console.log(ennum);
let clicks = 3;

function enter() {
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;

    const inputField = document.getElementById('input');
    const guessedNumber = parseInt(inputField.value);
    const result = document.getElementById('result');

    if (isNaN(guessedNumber)) {
        result.textContent = "Please enter a valid number.";
        return; 
    }

    if (guessedNumber === ennum) {
        result.textContent = "Congratulations! You guessed the correct number: " + ennum ;
        inputField.value = '';
        
    } else if (guessedNumber < ennum) {
        result.textContent = "Too Low!";
    } else {
        result.textContent = "Too High!";
    }
}