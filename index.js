// General
const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");
const logoutButton = document.getElementById("logoutButton");
const typeOfGameSelection = document.getElementById("typeOfGame");
selectTypeOfGame = () => typeOfGameSelection.selectedOptions[0].value;
const difficultySelection = document.getElementById("dificultad");
selectDifficulty = () => difficultySelection.selectedOptions[0].value;
const gameContainer = document.getElementById("gameContainer");
const instructionContainer = document.getElementById("instructionsContainer");
const moves = document.getElementById("moves");
const showTime = document.getElementById("time");
const greeting = document.getElementById("greeting");

// Timer
function startTime(stopTimer) {
  let min = 0;
  let seg = 0;
  stopTimer = setInterval(function () {
    seg++;
    showTime.innerHTML = `Tiempo: ${min} min ${seg} seg`;
    if (seg == 60) {
      seg = 0;
      min++;
    }
    if (win === true || clearTimer === true) {
      clearInterval(stopTimer);
    }
  }, 1000);
}

// Contar victorias
function winTrophie() {
  const playerName = localStorage.getItem(STORAGE_KEYS.USER_LOGGED_IN);
  const playerData = JSON.parse(localStorage.getItem(playerName));
  const newPlayerData = {
    ...playerData,
    trophies: Number(playerData.trophies + 1),
  };
  localStorage.setItem(playerName, JSON.stringify(newPlayerData));
  setTimeout(function () {
    gameContainer.innerHTML = `Felicitaciones ${playerName}, GANASTE!! `;
  }, 500); 
}

// Reiniciar juego
restartButton.addEventListener("click", restart);

function restart() {
  clearTimer = true;
  gameContainer.innerHTML = "";
  gameNumbers = [];
  elements = [];
  fullPokeball = [];
  cardsContainer = [];
  imgContainer = [];
  accumulator = 0;
  id = 0;
  success = 0;
  movesAddition = 0;
  showTime.innerHTML = `Tiempo: 0 min 0 seg`;
  moves.innerHTML = `Movimientos: 0`;
  startButton.addEventListener("click", createGame);
}

// Variables compartidas por ambos juegos
let win;
let movesAddition = 0;
let stopTimer;
let clearTimer;
let elements;

// Array de elementos
function mixElements() {
  elements = [];
  for (let i = 1; i <= 150; i++) {
    elements.push(i);
    elements.sort(() => Math.random() - 0.5);
  }
}

// Generamos el juego en la pantalla
startButton.addEventListener("click", createGame);

function createGame() {
  win = false;
  clearTimer = false;
  let game = selectTypeOfGame();
  if (game === "Numbers") {
    numberGame();
  } else {
    pokemonGame();
  }
  startButton.removeEventListener("click", createGame);
}