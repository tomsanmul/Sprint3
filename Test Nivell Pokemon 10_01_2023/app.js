const Pokemon = require("./pokemon.js");

let pokemons = [
  new Pokemon('1', 'Tomas', 3, 'fuego', [{
    nombre: 'Ataque freidor',
    potencia: 4
  }, {
    nombre: 'Ataque volador',
    potencia: 2
  }]),
  new Pokemon('2', 'Boris', 2, 'agua', [{
    nombre: 'Ataque acuatico',
    potencia: 4
  }, {
    nombre: 'Ataque terrestre',
    potencia: 3
  }, {
    nombre: 'Ataque electrico',
    potencia: 1
  }]),
  new Pokemon('3', 'Ivan', 1, 'electrico', [{
    nombre: 'Ataque electrico',
    potencia: 4
  }, {
    nombre: 'Ataque freidor',
    potencia: 2
  }, {
    nombre: 'Ataque electrico',
    potencia: 1
  }]),
  new Pokemon('4', 'Marta', 5, 'agua', [{
    nombre: 'Ataque acuatico',
    potencia: 4
  }, {
    nombre: 'Ataque electrico',
    potencia: 1
  }]),
  new Pokemon('5', 'Omar', 3, 'electrico', [{
    nombre: 'Ataque electrico',
    potencia: 4
  }]),
  new Pokemon('6', 'Jordi', 6, 'planta', [{
    nombre: 'Ataque freidor',
    potencia: 3
  }, {
    nombre: 'Ataque acuatico',
    potencia: 3
  }, {
    nom: 'Ataque volador',
    potencia: 2
  }])

];


//Exercici 1: Força un Error, si el Tipus es diferent a agua, fuego, electrico, planta (Exemple: 'arbol')
console.log("\nExercici 1: Força un Error si el Tipus es diferent a agua, fuego, electrico, planta\n");
try {
  new Pokemon('7', 'Jaime', 5, 'arbol', [{
    nombre: 'Ataque terrestre',
    potencia: 4
  }, {
    nombre: 'Ataque freidor',
    potencia: 2
  }])
} catch (error) {
  console.log('Error: ' + error.message);
}


//Exercici 1b: Força un Error, si l'array d'atacs no es d'entre 1 i 4
console.log("\nExercici 1b: Força un Error, si l'array d'atacs no es d'entre 1 i 4\n");
try {
  new Pokemon('7', 'Jaime', 5, 'fuego', [{
    nombre: 'Ataque terrestre',
    potencia: 4
  }, {
    nombre: 'Ataque freidor',
    potencia: 2
  }, {
    nombre: 'Ataque terrestre',
    potencia: 4
  }, {
    nombre: 'Ataque freidor',
    potencia: 2
  }, {
    nombre: 'Ataque freidor',
    potencia: 2
  }]);
} catch (error) {
  console.log('Error: ' + error.message);
}

//Exercici 1c: Força un Error, si l'array d'atacs no te les propiettas nombre i/o potencia 
console.log("\nForça un Error, si l'array d'atacs no te les propetitas nombre i/o potencia\n");
// try {
//   let pok = new Pokemon('7', 'Jaime', 5, 'fuego', [{
//     otroNombre: 'Ataque terrestre',
//     pot: 4
//   }]);
// } catch (error) {
//   console.log('Error: ' + error.message);
// }


// Exercici 2: Mostra tots els Pokemons
console.log("\nExercici 2: Mostra tots els Pokemons\n");
console.table(pokemons);


//Exercici 3: Mostrar el nom i numero dels Pokemons electrics
console.log("\nExercici 3: Mostrar el nom i numero dels Pokemons electrics: \n");

for (i = 0; i < pokemons.length; i++) {
  if (pokemons[i].tipo === 'electrico') {
    console.log(`Numero: ${pokemons[i].numero} || Nom: ${pokemons[i].nombre}`);
  }
};


//Exercici 4: Mostrar el llistat d'atacs de cada pokemon 
console.log("\nEx 4: Mostrar el llista d'atacs de cada pokemon: \n");
for (i = 0; i < pokemons.length; i++) {

  console.log(`Nombre Pokemon: ${pokemons[i].nombre}`);

  for (j = 0; j < pokemons[i].ataques.length; j++) {
    console.log(`Ataque ${j+1} ||  Nombre: ${pokemons[i].ataques[j].nombre}  ||  Potencia: ${pokemons[i].ataques[j].potencia}`);
  }
  console.log("");
}


//Exercici 5: Als Pokemon del tipus aigua els hi sumem 2 nivells: 
console.log("\nExercici 5: Als Pokemon del tipus aigua els hi sumem 2 nivells: \n");

for (i = 0; i < pokemons.length; i++) {
  if (pokemons[i].tipo === 'agua') {
    pokemons[i].subirNivel(2);
  }
};
// Motrem novament els Pokemos para veure el cambio 
console.table(pokemons);