
const Joc = require("./joc.js");
const Jugador = require("./jugador.js");
const Marcador = require("./marcador.js");



//Creo els jocs i els jugadors i els afegeixo en un array
let jocs = [new Joc('Parchis'), new Joc('Oca'), new Joc('Dominó')];
let jugadors = [new Jugador('Tomas',0), new Jugador('Javier',0), new Jugador('Eva',0), new Jugador('Maria',0)];


// Afegim jugadors als 3 jocs, Parchís, Oca, Dominó: 

//jocs[0]->Parchis
jocs[0].afegirJugador(jugadors[0], jugadors[1], jugadors[2], jugadors[3]);

//jocs[1]->Oca
jocs[1].afegirJugador(jugadors[0], jugadors[1], jugadors[2], jugadors[3]);

//jocs[2]->Dominó
jocs[2].afegirJugador(jugadors[0], jugadors[1], jugadors[2], jugadors[3]);



// Funció principal de l'execució de la partida
function Partida() {
    console.log(`\n---- Tots els jugadors començen amb 0 punts ----`);
    


    for (let i = 0; i < 5; i++) { // 5 Tirades per cada joc
        console.log(`\n  <------------------ TIRADA ${i+1} ------------------>\n`);
        jocs.forEach(joc => {
            let marcador = new Marcador(joc);
            //Sumem un numero aleatori entre -5 i 5, en cada tirada, a cada un dels jugadors
            for (let j = 0; j < jugadors.length; j++) {
                let sumaPunts = parseInt(Math.random() * 11) - 5;
                jugadors[j].afegeixPunts(sumaPunts);
                console.log(`  ${joc.nomJoc} -> S'han ${(sumaPunts >= 0) ? "sumat" : "restat"} ${sumaPunts} punts al jugador ${joc.jugadors[j].nomJugador}`);
                marcador.mostrarPuntuacio(jugadors[j]);
            }
            
            console.log(` `);
        });
        
    }

    console.log(`\n <------------------- FI DE LA PARTIDA ------------------>\n `);
  
}

// Executem la partida (5 tirades per Joc)
Partida();


marcador.mostrarResultats(jugadors);
