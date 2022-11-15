const Joc = require("./joc.js");
const Jugador = require("./jugador.js");


//Creo els jocs i els jugadors i els afegeixo en un array
let jocs = [new Joc('Parchis'), new Joc('Oca'), new Joc('Dominó')];
let jugadors = [new Jugador('Tomas'), new Jugador('Dolors'), new Jugador('Toni'), new Jugador('Maria')];


// Afegim jugadors als 3 jocs: [0]->Parchis, [1]->Oca
jocs[0].afegirJugador(jugadors[0], jugadors[1], jugadors[2], jugadors[3]);
jocs[1].afegirJugador(jugadors[0], jugadors[1], jugadors[2], jugadors[3]);
jocs[2].afegirJugador(jugadors[0], jugadors[1], jugadors[2], jugadors[3]);


// Funció principal de l'execució de la partida
function Partida() {
    let puntsJugadorJoc;
    for (let i = 0; i < 5; i++) {        // 5 Tirades per cada joc
        console.log(`\nTIRADA ${i+1}:`);  
        
        jocs.forEach(joc => {
            let posicioJugador = parseInt(Math.random() * joc.jugadors.length);
            let sumaPunts = parseInt(Math.random() * 11) -5; //Sumem un numero aleatori entre -5 i 5 a algún jugador aleatoriament.
            joc.jugadors[posicioJugador].punts += sumaPunts;
            puntsJugadorJoc = joc.jugadors[posicioJugador].punts;
            console.log(`  ${joc.nom} -> S'han ${(sumaPunts >= 0) ? "sumat" : "restat"} ${sumaPunts} punts al jugador ${joc.jugadors[posicioJugador].nom}`);
        });
    };

}


// Executem la partida (5 tirades per Joc)
Partida();


// Mostrem els resultats. 
jocs.forEach((joc) => {
    joc.mostrarResultats(joc.jugadors);
});

