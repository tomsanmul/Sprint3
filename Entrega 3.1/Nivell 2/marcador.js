class Marcador {

    constructor(joc, jugador, puntuacio) {
        // SINGLETON

        //Necessitem crear només UN marcador. -> SINGLETON. No permetem crear més d'un marcador d'aquesta manera:

        //PRIMER: Comprovem que el Marcador.instance no sigui "undefined".   

        if (typeof (Marcador.instance) === "object") { //Si NO ho es, és adir que ja existeix l'objecte,
            return Marcador.instance; // <- , simplemente retornem la instancia del marcador.
        } else {
            //Si SÍ es UNDEFINED, significa que estem intentan crear un altre Marcador, 
            //i ho evitarem retornant la instància del primer i únic Marcador.
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
        let quantitatJugadors = jugadors.length;
        let guanyador;
        let i = 0;
        let puntsUltimJugador = 0;
        let jugadorActual;
        let puntsJugadorActual;

        for (i = 0; i < quantitatJugadors; i++) {

            jugadorActual = jugadors[i];
            puntsJugadorActual = jugadors[i].punts;

            if (puntsJugadorActual >= puntsUltimJugador) {
                puntsUltimJugador = puntsJugadorActual;
                guanyador = jugadorActual;
            }
        }
        console.log(`\nGuanyador: ${guanyador.nom} amb ${puntsUltimJugador} punts.`);
    }
}

module.exports = new Marcador();