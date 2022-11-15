const Marcador = require("./marcador.js")

class Joc {
    constructor(nom) {
        this.nom = nom;
        this.jugadors = [];

    }

    afegirJugador(j1, j2, j3, j4) {
        this.jugadors.push(j1, j2, j3, j4);
        console.log(`Jugadors afegits al ${this.nom}: ${this.jugadors[0].nom} / ${this.jugadors[1].nom} / ${this.jugadors[2].nom} / ${this.jugadors[3].nom}.`);
    }

};




module.exports = Joc;