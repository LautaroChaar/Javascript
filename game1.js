// Variables juego 1
let gameNumbers = [];
let uncoverNumber = 0;

// Programamos el juego en base a su dificultad
// Juego 1
const numberGame = () => {
  mixElements();
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
  for (number in totalNumbers) {
    let button = document.createElement("BUTTON");
    button.setAttribute("class", "btnGame");
    button.setAttribute("id", Number(number) + 1);
    gameContainer.appendChild(button);
    gameNumbers.push(button);
  }

  // Creamos un array con los botones generados y los distribuimos aleatoriamente
  gameNumbers.sort(() => Math.random() - 0.5);

  // Mostramos el numero oculto en cada boton por unos segundos
  gameNumbers.forEach((btn, idex) => {
    btn.innerHTML = idex + 1;
    btn.disabled = true;
    if (dificulty === "Fácil" || dificulty === "Intermedio") {
      setTimeout(() => {
        btn.innerHTML = " ";
        btn.disabled = false;
        startTime(stopTimer);
      }, 5000);
    } else {
      setTimeout(() => {
        btn.innerHTML = " ";
        btn.disabled = false;
        startTime(stopTimer);
      }, 9000);
    }

    // Mostramos el numero al hacer click en el boton
    btn.addEventListener("click", uncover);
    function uncover() {
      let n = gameNumbers.indexOf(btn);
      btn.innerHTML = parseInt(n) + 1;
      movesAddition++;
      moves.innerHTML = `Movimientos: ${movesAddition}`;

      // Logica del juego
      let acum = 1;
      if (uncoverNumber + acum == btn.innerHTML) {
        uncoverNumber++;
        btn.style.color = "#3da73d";
        btn.disabled = true;
        if (uncoverNumber == gameNumbers.length) {
          win = true;
          winTrophie();
          uncoverNumber = 0;
        }
      } else {
        btn.style.color = "rgb(167 61 61)";
        setTimeout(function () {
          btn.innerHTML = " ";
        }, 800);
      }
    }
  });
};