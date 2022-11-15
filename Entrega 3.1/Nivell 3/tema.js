class Tema {
    constructor(nomTema) {
        this.nomTema = nomTema;
        this.usuaris = [];
        console.log(`Alta del tema ${this.nomTema}`);
    };


    altaSubscripcio(usuari) {
            this.usuaris.push(usuari);
            console.log(`Alta de l'usuari ${usuari.nomUsuari} al tema ${this.nomTema}`);
        };


    notifica(tema, missatge) {
        this.usuaris.forEach((usuari) => {
            usuari.bustia.call(usuari, tema, missatge);
            });
        };
}

module.exports = Tema;