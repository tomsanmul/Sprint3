const Pokemon = require("./pokemon.js");

//declaro objetos de Ataques, (At1, At2, At3, At4),  per despres ficarlos en el arry d' atacs directament a cada Pokemon)
let At1 = new Object();
    At1.nombre = 'Ataque relamapgo';
    At1.potencia = 3;

let At2 = new Object();
    At2.nombre = 'Ataque freidor';
    At2.potencia = 4;

let At3 = new Object();
    At3.nombre = 'Ataque acuatico';
    At3.potencia = 2;

let At4 = new Object();
    At4.nombre = 'Ataque electrico';
    At4.potencia = 1;
    


let pokemons = [
    new Pokemon ('1', 'Tomas',3,'fuego',[At1, At3]), 
    new Pokemon ('2', 'Boris',2,'agua',[At1, At2, At4]), 
    new Pokemon ('3', 'Ivan',1,'electrico',[At1, At3, At4]), 
    new Pokemon ('4', 'Marta',5,'agua',[At2, At3]), 
    new Pokemon ('5', 'Omar',3,'electrico',[At1, At4]), 
    new Pokemon ('6', 'Jordi',6,'planta', [At2, At3, At4])

];

//Exercici 1: Força im Error si el Tipus es diferent a agua, fuego, electrico, planta
console.log("\nExercici 1: Força un Error si el Tipus es diferent a agua, fuego, electrico, planta\n");
try {
    new Pokemon ('7', 'Jaime',5,'arbol', [At1, At2]);
  } 
  catch (error) {
    console.log('Error: ' + error.message);
  }


// Exercici 2: Mostra tots els Pokemons
console.log("\nExercici 2: Mostra tots els Pokemons\n");
console.table(pokemons);


//Exercici 3: Mostrar el nom i numero dels Pokemons electrics
console.log("\nExercici 3: Mostrar el nom i numero dels Pokemons electrics: \n");

for(i=0;i<pokemons.length; i++){
      if (pokemons[i].tipo === 'electrico') {
        console.log(`Numero: ${pokemons[i].numero} || Nom: ${pokemons[i].nombre}`);
      }
    };


//Exercici 4: Mostrar el llistat d'atacs de cada pokemon 
console.log("\nEx 4: Mostrar el llista d'atacs de cada pokemon: \n");
for(i=0; i<pokemons.length;i++){

    console.log(`Nombre Pokemon: ${pokemons[i].nombre}`);

    for(j=0; j < pokemons[i].ataque.length;j++){
        console.log(`Ataque ${j+1} ||  Nombre: ${pokemons[i].ataque[j].nombre}  ||  Potencia: ${pokemons[i].ataque[j].potencia}`);
    }
    console.log("");
}


//Exercici 5: Als Pokemon del tipus aigua els hi sumem 2 nivells: 
console.log("\nExercici 5: Als Pokemon del tipus aigua els hi sumem 2 nivells: \n");

for(i=0;i<pokemons.length; i++){
      if (pokemons[i].tipo === 'agua') {
        pokemons[i].subirNivel(2);
      }
    };
// Motrem novament els Pokemos para veure el cambio 
console.table(pokemons);