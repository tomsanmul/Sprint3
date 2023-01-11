class Joc {
    constructor(nomJoc) {
        this.nomJoc = nomJoc;
        this.jugadors = [];

    }

    afegirJugador(j1, j2, j3, j4) {
        this.jugadors.push(j1, j2, j3, j4);
        console.log(`Jugadors afegits al joc '${this.nomJoc}': ${j1.nomJugador} / ${j2.nomJugador} / ${j3.nomJugador} / ${j4.nomJugador}.`);
    }

};




module.exports = Joc;