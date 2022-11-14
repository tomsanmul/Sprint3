class Marcador {

    constructor(joc, jugador, puntuacio) {
        this.joc = joc;
        this.jugador = jugador;
        this.puntuacio = puntuacio;

        // SINGLETON

        //Necessitem crear només UN marcador. -> SINGLETON. No permetem crear més d'un marcador d'aquesta manera:

        //PRIMER: Comprovem que el Marcador.instance no sigui "undefined".   

        if (typeoff(Marcador.instance) === "object") { //Si NO ho es, és adir que ja existeix l'objecte,
            return Marcador.instance; // <- , simplemente retornem la instancia del marcador.
        } else {
            //Si SÍ es UNDEFINED, significa que estem intentan crear un altre Marcador, 
            //i ho evitarem retornant la instància del primer i únic Marcador.
            Marcador.instance = this;
            return this;
        }

    }

    
    mostrarPuntuacio(jugador) {
        console.log(`Jugador: ${jugador.nom} / Puntuació: ${jugador.puntuacio}`);
    };


    Guanyador(jugadors) {
        let guanyador;
        let i = 0;
        let puntsUltimJugador = 0;
        let jugadorActual;
        let puntsJugadorActual;

        for (i = 0; i < jugadors.length; i++) {

            jugadorActual = jugadors[i];
            puntsJugadorActual = jugadors[i].punts;

            if (puntsJugadorActual >= puntsUltimJugador) {
                puntsUltimJugador = puntsJugadorActual;
                guanyador = jugadorActual;
            }
        }
        console.log(`\nGuanyador: ${guanyador.nom} / Puntuació: ${puntsUltimJugador} punts`);
    }
}



module.exports = Marcador;