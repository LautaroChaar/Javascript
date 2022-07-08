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
const trophieButton = document.getElementById("victoriesBtn");

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
      showTime.innerHTML = `Tiempo: 0 min 0 seg`;
    }
  }, 1000);
}


// Info victorias
function infoVictories() {
  trophieButton.addEventListener("click", info);

  function info() {
    const playerName = localStorage.getItem(STORAGE_KEYS.USER_LOGGED_IN);
    const playerData = JSON.parse(localStorage.getItem(playerName));
    Swal.fire({
      title: 'Trofeos',
      text: `Tienes ${playerData.trophies} trofeo/s`,
      icon: 'info',
      confirmButtonText: ':)'
    });
  }
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
  moves.innerHTML = `Movimientos: 0`;
  
  setTimeout(function () {
    Swal.fire({
      title: 'GANASTE!',
      text: `Felicitaciones ${playerName}`,
      icon: 'success',
      confirmButtonText: 'Obtener trofeo'
    });
    restart()
  }, 500); 
}

// Reiniciar juego
restartButton.addEventListener("click", restart);

function restart() {
  clearTimer = true;
  gameContainer.innerHTML = "";
  gameNumbers = [];
  elements = [];
  uncoverNumber = 0;
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
  game === "Numbers" && numberGame();
  startButton.removeEventListener("click", createGame);
}

