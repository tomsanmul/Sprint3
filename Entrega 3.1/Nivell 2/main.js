const Joc = require("./joc.js");
const Jugador = require("./jugador.js");
const marcador = require("./marcador.js");


//Creo els jocs i els jugadors i els afegeixo en un array

let jocs = [new Joc('Parchis'), new Joc('Oca'), new Joc('Uno')];

let jugadors = [new Jugador('Tomas'), new Jugador('Dolors'), new Jugador('Toni'), new Jugador('Maria')];


// Afegim jugadors als 3 jocs: [0]->Parchis, [1]->Oca, [2]->Uno:
jocs[0].afegirJugador(jugadors[0], jugadors[1], jugadors[2], jugadors[3]);
jocs[1].afegirJugador(jugadors[0], jugadors[1], jugadors[2], jugadors[3]);
jocs[2].afegirJugador(jugadors[0], jugadors[1], jugadors[2], jugadors[3]);



function modificarPunts() {
    let punts = 0;
    let restarSumarPunts = parseInt(Math.random() * 2);

    (restarSumarPunts == 0) ? punts = -2 : punts = 3;       // Si restarSumarPunts = 0 --> RESTEM 2 PUNTS // Si Si restarSumarPunts = 1 --> SUMEM 3 PUNTS
    return punts;
}

function canviarPunts() {
    let i = 0;
    let puntsJugadorJoc;
    for (i = 0; i < 10; i++) {     // 10 rondes de jocs
        let ronda = i + 1;
        console.log(`\nRONDA ${ronda}: `);
        jocs.forEach(joc => {

            let puntsAModificar = 0;
            let quantitatJugadors = joc.jugadors.length;
            let posicioJugador = parseInt(Math.random() * quantitatJugadors);

            let missatge;
            puntsAModificar = modificarPunts()
            if (puntsAModificar > 0) {
                missatge = `S'han sumat ${puntsAModificar} punts`
            } else {
                missatge = `S'han restat ${-puntsAModificar} punts`
            }

            joc.jugadors[posicioJugador].punts += puntsAModificar;
            puntsJugadorJoc = joc.jugadors[posicioJugador].punts;
            console.log(` JOC: ${joc.nomJoc} ==>> ${missatge} al jugador ${joc.jugadors[posicioJugador].nomJugador}`);

            if (puntsJugadorJoc < 0) {
                joc.jugadors[posicioJugador].punts = 0;
            };

        });
    };

}


function mostrarResultats() {
    console.log("\nPUNTS TOTALS DE CADA JUGADOR:")
    arrayJugadors.forEach(jugador => {
        marcador.mostrarPunts(jugador);
    });
    marcador.mostrarGuanyador(arrayJugadors);
};


canviarPunts();
mostrarResultats();