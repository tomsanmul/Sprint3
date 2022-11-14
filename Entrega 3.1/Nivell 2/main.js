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

