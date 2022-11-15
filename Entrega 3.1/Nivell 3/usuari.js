class Usuari {
    constructor(nomUsuari) {
        this.nomUsuari = nomUsuari;
    };

    bustia(tema, missatge) {
        console.log(`L'usuari ${this.nomUsuari} ha rebut el missatge "${missatge}" en el tema "${tema.nomTema}".`);
    };
};

module.exports = Usuari;