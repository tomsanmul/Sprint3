const Pokemon = require("./pokemon.js");


let At1 = new Object();
    At1.nom = 'Ataque relamapgo';
    At1.potencia = 3;

let At2 = new Object();
    At2.nom = 'Ataque freidor';
    At2.potencia = 4;

let At3 = new Object();
    At3.nom = 'Ataque acuatico';
    At3.potencia = 2;

let At4 = new Object();
    At4.nom = 'Ataque electrico';
    At4.potencia = 1;
    


let pokemons = [
    new Pokemon ('1', 'Tomas',3,'fuego',[At1, At2, At3, At4]), 
    new Pokemon ('2', 'Boris',2,'agua',[At1, At2, At4]), 
    new Pokemon ('3', 'Ivan',1,'electrico',[At1, At3, At4]), 
    new Pokemon ('4', 'Marta',5,'agua',[At2, At3]), 
    new Pokemon ('5', 'Omar',3,'electrico',[At1, At4]), 
    new Pokemon ('6', 'Jordi',6,'planta', [At2, At3, At4])

];


//Mostrar el nom i numero dels Pokemons electrics

let electrics = pokemons.find((pokemon) => pokemon.tipo == "electrico");
console.log(electrics);



//Mostrar el listado de ataques de cada pokemon 

for(i=0; i<pokemons.length;i++){

    console.log(`Nom Pokemon: ${pokemons[i].nombre}`);

    console.log(pokemons[i].ataque.length);

    for(j=0; j < pokemons[i].ataque.length;j++){
        console.log(`Ataque Nombre: ${pokemons[i].ataque.nom}`);
        console.log(`Ataque potencia: ${pokemons[i].ataque.potencia}`);
    }
}


/*
for(i=0; i<pokemons.length;i++){
    console.log(pokemons);
}
*/