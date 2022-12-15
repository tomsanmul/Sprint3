class Tema {
    constructor(nomTema) {
        this.nomTema = nomTema;
        this.usuaris = [];
        this.missatges = [];
        console.log(`Alta del tema ${this.nomTema}`);
    };


    altaSubscripcio(usuari) {
        this.usuaris.push(usuari);
        console.log(`Alta de l'usuari ${usuari.nomUsuari} al tema ${this.nomTema}`);
    };


    afegirMissatge(missatge, quiEnvia) { //Afegeixo el paràmetre quiEnvia, amb el nom de l'usuari que envia el missatge, per filtrar més abaix que el mateix usuari no rebi el missatge que envia ell mateix
        this.missatges.push(missatge);
        this.usuaris.forEach((usuari) => {
            if (usuari.nomUsuari != quiEnvia) {  //Amb aquesta condició evitem que l'usuari que envia un missatge no el rebi ell mateix.
                usuari.rebreMissatge(this.nomTema, missatge);
            }
        });

    };
}

module.exports = Tema;