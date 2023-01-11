class Marcador {

    constructor() {
        // SINGLETON

        //Necessitem crear només UN MARCADOR. -> SINGLETON. No permetem crear més d'una clase marcador de la segënt manera:
        //PRIMER: Comprovem que el Marcador.instance no sigui "undefined".   

        if (typeof (Marcador.instance) === "object") { //Si NO es undefined, significa que ja existeix el marcador.
            return Marcador.instance; // <- , llavors, simplemente retornem la instancia del marcador.
        } else {
            //Si SÍ es undefined, significa que no existeix el marcador, aleshores, el creem per 1er cop.
            Marcador.instance = this;

            this.puntuacions = [];               
        }
    }


    afegeixPunts(joc, jugador, punts){

        //La ides es afegir objectes en el array puntuacions que contigui la puntuacio de cada joc i jugador.

        //Creo un objecte dades, i li afegeixo 3 propietats: joc, jugador i punts.
        let dades = {
            "joc": joc,
            "jugador": jugador,
            "punts": punts
        }


        //busco en el array de puntuacions, l'bojecte anterior dades, per JOC i JUGADOR . Si el trobo afegeixo /modifico els punts. Sino el trobo, el creo abaix. 
        let i=0;
        let encontrado = false;

            for(i=0;i< this.puntuacions.length;i++){
                    if (this.puntuacions[i].joc == dades.joc && this.puntuacions[i].jugador == dades.jugador) {                 
                        this.puntuacions[i].punts += dades.punts;
                        console.log(`  ${dades.joc} -> S'han ${(punts >= 0) ? "sumat" : "restat"} ${punts} punts al jugador ${dades.jugador}. PUNTS ACUMULATS: ${this.puntuacions[i].punts}`);
                        encontrado = true;
                    }
                }

        //si no l'he trobat en el array puntuacions de es que encara no existeix aquest JOC i JUGADOR, per tant l'inserto amb el PUSH
            if (encontrado == false){ 
                this.puntuacions.push(dades);
                console.log(`  ${dades.joc} -> S'han ${(punts >= 0) ? "sumat" : "restat"} ${punts} punts al jugador ${dades.jugador}. PUNTS ACUMULATS: ${this.puntuacions[i].punts}`);
            }    
            
    }


    mostrarPunts(jugador) {

        //busco en el array de puntuacions, l'bojecte anterior dades, per JOC i JUGADOR . Si el trobo afegeixo els punts. Sino el trobo, el creo abaix. 
        let i=0;
        for(i=0;i< this.puntuacions.length;i++){
            if (this.puntuacions[i].joc == joc && this.puntuacions[i].jugador == jugador) {
                console.log(`   Puntuacio actual: ${this.puntuacions[i].punts} `);
                }
        }
        
    };

    
    mostrarResultats() {
        console.log("\nPUNTS TOTALS DE CADA JUGADOR:\n")
        jugadors.forEach(jugador => {
            mostrarPunts(jugador);
        });
        mostrarGuanyador(jugadors);
        
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

module.exports = Marcador;