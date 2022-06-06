let dificulty = Number(prompt("Seleccione en que dificultad desea jugar: 1, 2 o 3"));
const createCards = (i) => console.log(`Carta ${i}`);

if (dificulty === 1) {
    for (let i = 0; i < 8; i++){
        createCards(i);
    }
} else if (dificulty === 2) {
    for (let i = 0; i < 14 ; i++){
        createCards(i);
    }
} else if (dificulty === 3) {
    for (let i = 0; i < 20; i++)
        createCards(i);
    } else {
        alert("No fue posible establecer la dificultad.");
    }

