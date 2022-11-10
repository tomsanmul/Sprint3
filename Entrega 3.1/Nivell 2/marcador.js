class Marcador {
    constructor(marcador, puntuacio) {
        this.marcador = marcador;
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
}