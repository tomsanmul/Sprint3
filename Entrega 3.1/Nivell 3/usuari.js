class Usuari {
    constructor(nomUsuari) {
        this.nomUsuari = nomUsuari;
        console.log(`Alta del usuari ${this.nomUsuari}`);
    };

    rebreMissatge(tema, missatge) {
        console.log(`L'usuari ${this.nomUsuari} ha rebut el missatge "${missatge}" en el tema ${tema}.`);
    }

    enviarMissatge(tema, missatge) {
        console.log(`L'usuari ${this.nomUsuari} HA ENVIAT el missatge: "${missatge}" en el tema ${tema.nomTema}.`);
        tema.afegirMissatge(missatge, this.nomUsuari);
    }


};

module.exports = Usuari;