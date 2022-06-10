let dificulty = Number(prompt("Seleccione en que dificultad desea jugar: 1, 2 o 3"));
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


const createCards = (x, y) => {
    let gameDifficulty = numbers.slice(x, y);
    console.log(gameDifficulty.sort(()=>Math.random() - 0.5));
}

if (dificulty === 1) {
        createCards(0,8);
} else if (dificulty === 2) {
        createCards(0,14);
} else if (dificulty === 3) {
        createCards();
    } else {
        alert("No fue posible establecer la dificultad.");
    }

