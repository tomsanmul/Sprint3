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
        //Per decidir qu es el guanyador creo 2 variables, guanyador i els puntGuanyador.
        //Recorro tot l'array de Jugadors i em vaig quedan amb el jugador que tingui máxima cpuntuació, començan per 0
        let guanyador = "";
        let puntsGuanyador = -25;

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