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


    afegeixPunts(joc, jugador, punts) {

        //La ides es afegir objectes en el array puntuacions que contigui la puntuacio de cada joc i jugador.

        //Creo un objecte "dades", i li afegeixo 3 propietats: joc, jugador i punts.
        let dades = {
            "joc": joc,
            "jugador": jugador,
            "punts": punts
        }


        //busco en el array de puntuacions, l'objecte anterior dades, per JOC i JUGADOR . Si el trobo, només he d'afegir / modificar els punts. 
        //Sino el trobo, (encontrado = false) el creo més abaix. 
        let i = 0;
        let encontrado = false;

        for (i = 0; i < this.puntuacions.length; i++) {
            if (this.puntuacions[i].joc == dades.joc && this.puntuacions[i].jugador == dades.jugador) {
                this.puntuacions[i].punts += dades.punts;
                console.log(`  ${dades.joc} -> S'han ${(punts >= 0) ? "sumat" : "restat"} ${punts} punts al jugador ${dades.jugador}. PUNTS ACUMULATS: ${this.puntuacions[i].punts}`);
                encontrado = true;
            }
        }

        //si no l'he trobat en el array puntuacions, es que encara no existeix aquest JOC i JUGADOR, per tant, l'inserto amb un PUSH
        if (encontrado == false) {
            this.puntuacions.push(dades);
            console.log(`  ${dades.joc} -> S'han ${(punts >= 0) ? "sumat" : "restat"} ${punts} punts al jugador ${dades.jugador}. PUNTS ACUMULATS: ${this.puntuacions[i].punts}`);
        }

    }

    mostrarResultats() {
        console.log("\nMARCADOR FINAL DE CADA JOC i JUGADOR:\n")
        console.table(this.puntuacions);
    };


    mostrarGuanyador(joc) {
        // Primer: filtro només els 4 jugadors d'aquest joc en concret
        const jugadors = this.puntuacions.filter(jugador => (jugador.joc == joc.nomJoc));

        //Segon: dels 4 jugadors del Joc X, busco el que te màxima puntuacio
        const Guanyador = jugadors.reduce((maxim, actual) => {
            if (actual.punts > maxim.punts) {
                maxim = actual;
            }
            return maxim;
        });

        //Imprimeixo per pantalla l' únic objecte que m'ha quedat del Guanyador:    
        console.log(`El gunyador del ${joc.nomJoc} es: ${Guanyador.jugador}, amb ${Guanyador.punts} punts.`);
    }

}

module.exports = Marcador;