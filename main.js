let pokemons = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"];

alert(`Los pokemons disponibles son:`);

for (let i = 0; i<pokemons.length; i++) {
    alert(`${i+1}: ${pokemons[i]}`);
}

let catchPokemon = Number((prompt("Coloque el número del pokemon que desea elegir: ")));

switch (catchPokemon) {
    case 1:
        alert(`Usted atrapó a ${pokemons[0]}`)
        break;
    case 2:
        alert(`Usted atrapó a ${pokemons[1]}`)
        break;
    case 3:
        alert(`Usted atrapó a ${pokemons[2]}`)
        break;
    case 4: 
        alert(`Usted atrapó a ${pokemons[3]}`)
        break;
    default:
        alert(`No ha sido posible atrapar un pokemon`);
}