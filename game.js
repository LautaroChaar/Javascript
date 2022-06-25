// General
const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");
const typeOfGameSelection = document.getElementById("typeOfGame");
selectTypeOfGame = () => typeOfGameSelection.selectedOptions[0].value;
const difficultySelection = document.getElementById("dificultad");
selectDifficulty = () => difficultySelection.selectedOptions[0].value;
const gameContainer = document.getElementById("gameContainer");
const moves = document.getElementById("moves");
const showTime = document.getElementById("time");

// Cronometro
function startTime (stopTimer) {
    let min = 0;
    let seg = 0;
    stopTimer = setInterval(function() {
        seg++;
        showTime.innerHTML = `Tiempo: ${min} min ${seg} seg`;
        if (seg == 60) {
            seg = 0;
            min++;
        }
        if (win === true){
            clearInterval(stopTimer);
        }
    },1000);
}

// Boton para reiniciar la pagina
restartButton.addEventListener("click", reload);

function reload () {
    location.reload();
};

// Variables compartidas
let elements = [];
let win = false;
let movesAddition = 0;
let stopTimer;

// Variables juego 1
let gameNumbers = [];
let uncoverNumber = 0;


// Array de elementos
for (let i = 1; i <= 150; i++) {
    elements.push(i);
    elements.sort(()=>Math.random() - 0.5);
}

// Programamos el juego en base a su dificultad
// Juego 1
const numberGame = () => {
    let dificulty = selectDifficulty();
    let totalNumbers;

    if (dificulty === "Fácil") {
        totalNumbers = elements.slice(0, 8);
    } else if (dificulty === "Intermedio") {
        totalNumbers = elements.slice(0, 14);
    } else {
        totalNumbers = elements.slice(0, 20);
    } 

		// Creamos los elementos del juego 1
    for(number in totalNumbers){
        let button = document.createElement("BUTTON");
        button.setAttribute("class", "btnGame")
        gameContainer.appendChild(button);
    }

    // Creamos un array con los botones generados y los distribuimos aleatoriamente
    const btn = document.querySelectorAll(".btnGame");
    for (let i = 0; i < btn.length; i++) {
        gameNumbers.push (btn[i]);
        gameNumbers.sort(()=>Math.random() - 0.5);
    }

    // Mostramos el numero oculto en cada boton por unos segundos
    gameNumbers.forEach((btn) => {
        let n = gameNumbers.indexOf(btn);
            btn.innerHTML = parseInt(n) + 1;
            setTimeout(() => {
                btn.innerHTML = " ";
                startTime(stopTimer);
            }, 5000);
            // Mostramos el numero al hacer click en el boton
        btn.addEventListener("click",uncover);
        function uncover() {
            let n = gameNumbers.indexOf(btn);
            btn.innerHTML = parseInt(n) + 1;
            movesAddition++;
            moves.innerHTML = `Movimientos: ${movesAddition}`;
            // Logica del juego
            let acum = 1;
            if ((uncoverNumber + acum) == btn.innerHTML ){
                uncoverNumber ++;
                btn.disabled = true;
                if (uncoverNumber == gameNumbers.length){
                    win = true;
                    setTimeout(function(){
                        alert ("Ganaste!!!");   
                    }, 500);
                }
                
            } else {
                setTimeout(function(){
                    btn.innerHTML = " ";
                }, 800);
            } 
        }
    });
}

// Generamos el juego en la pantalla
startButton.addEventListener("click",createGame);

function createGame() {
    let game = selectTypeOfGame();
    if (game === "Juego 1") {
        numberGame();
    } else {
        // Aca va a ir el juego 2
    }
    startButton.removeEventListener("click",createGame);
}