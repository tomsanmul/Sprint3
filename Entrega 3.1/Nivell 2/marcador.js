class Marcador {

    constructor(joc, jugador, puntuacio) {
        // SINGLETON

        //Necessitem crear només UN MARCADOR. -> SINGLETON. No permetem crear més d'una clase marcador de la segënt manera:
        //PRIMER: Comprovem que el Marcador.instance no sigui "undefined".   

        if (typeof (Marcador.instance) === "object") { //Si NO es undefined, significa que ja existeix el marcador.
            return Marcador.instance; // <- , llavors, simplemente retornem la instancia del marcador.
        } else {
            //Si SÍ es undefined, significa que no existeix el marcador, aleshores, el creem per 1er cop.
            Marcador.instance = this;
            this.joc = joc;
            this.jugador = jugador;
            this.puntuacio = puntuacio;
        }
    }

    mostrarPunts(jugador) {
        console.log(`Jugador: ${jugador.nom} - Punts: ${jugador.punts}`);
    };


    mostrarGuanyador(jugadors) {
        //Per decidir qui es el guanyador creo 2 variables: guanyador (on guardaré el Nom) i els puntGuanyador del guanyador..
        //Recorro tot l'array de Jugadors i em vaig quedan amb el jugador que tingui máxima puntuació.
        let guanyador = "";
        let puntsGuanyador = -99;

        for (let i = 0; i < jugadors.length; i++) {

            if (jugadors[i].punts >= puntsGuanyador) {
                puntsGuanyador = jugadors[i].punts;
                guanyador = jugadors[i];
            }
        }
        console.log(`\nGUANYADOR: ${guanyador.nom} amb ${puntsGuanyador} punts.`);
    }
}

module.exports = new Marcador();