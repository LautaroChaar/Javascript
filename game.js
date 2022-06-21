const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");
const selection = document.getElementById("dificultad");
const buttonContainer = document.getElementById("game");
const moves = document.getElementById("moves");
const showTime = document.getElementById("time");
let playerName = prompt("Ingrese su nombre:");
let dificulty = Number(prompt("Seleccione en que dificultad desea jugar: 1, 2 o 3"));

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let player = {
    name: playerName,
    moves: 'moves',
    time: 'time'
}


// Generamos el juego en base a su dificultad
const rangeOfNumbers = (x,y) => {
    let totalNumbers = numbers.slice(x, y);
    totalNumbers.forEach (() => {
        let button = document.createElement ("BUTTON");
        button.setAttribute("class", "btnGame")
        buttonContainer.appendChild(button);
    })
}


if (dificulty === 1) {
    rangeOfNumbers(0,8);
} else if (dificulty === 2) {
    rangeOfNumbers(0,14);
} else if (dificulty === 3) {
    rangeOfNumbers();
    } else {
        alert("No fue posible establecer la dificultad.");
    }


