const Joc = require("./joc.js");
const Jugador = require("./jugador.js");
const Marcador = require("./marcador.js");


//Creo els jocs i els jugadors i els afegeixo en un array
let jocs = [new Joc('Parchis'), new Joc('Oca'), new Joc('Dominó')];
let jugadors = [new Jugador('Tomas'), new Jugador('Javier'), new Jugador('Eva'), new Jugador('Maria')];

// Afegim jugadors als 3 jocs, Parchís, Oca, Dominó: 

//jocs[0]->Parchis
jocs[0].afegirJugador(jugadors[0], jugadors[1], jugadors[2], jugadors[3]);

//jocs[1]->Oca
jocs[1].afegirJugador(jugadors[0], jugadors[1], jugadors[2], jugadors[3]);

//jocs[2]->Dominó
jocs[2].afegirJugador(jugadors[0], jugadors[1], jugadors[2], jugadors[3]);



//------------------------------------------------
// Funció principal de l'execució de la partida
function Partida() {
    console.log(`\n---- Tots els jugadors començen amb 0 punts ----`);

    //Instancio el Marcador (només 1 marcador, Singleton)
    let marcador = new Marcador();

    for (let i = 0; i < 5; i++) { // 5 Tirades per cada joc
        console.log(`\n  <------------------ TIRADA ${i+1} ------------------>\n`);
        jocs.forEach(joc => {

            //Sumem un numero aleatori entre -5 i 5, en cada tirada, a cada un dels jugadors
            for (let j = 0; j < jugadors.length; j++) {
                let sumaPunts = parseInt(Math.random() * 11) - 5;
                marcador.afegeixPunts(joc.nomJoc, jugadors[j].nomJugador, sumaPunts);
            }

            console.log(` `);
        });

    }

    console.log(`\n <------------------- FI DE LA PARTIDA ------------------------>\n `);

    // MOSTREM ELS RESULTATS TOTALS DE CADA JOC
    marcador.mostrarResultats();

    //  MOSTREM ELS GUANYADORS DE CADA JOC:
    console.log(`\n <------------------- GUANYADORS ------------------------>\n `);
    jocs.forEach(joc => {
        marcador.mostrarGuanyador(joc);
    });

}


// Executem la partida (5 tirades per Joc)
Partida();