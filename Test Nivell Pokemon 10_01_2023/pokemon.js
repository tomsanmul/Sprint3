class Pokemon {
    constructor(numero, nombre, nivel, tipo, ataques) {

        if (!['agua', 'fuego', 'electrico', 'planta'].includes(tipo)) {
            throw new Error(`El tipo ${tipo} no existe`);
          }

        if ((ataques.length > 4) || (ataques.length < 1)){
            throw new Error(`El numero de ataques debe ser entre 1 y 4`);
          }


         this.numero = numero,
            this.nombre = nombre,
            this.nivel = nivel,
            this.tipo = tipo,
            this.ataques = ataques

    }

    subirNivel(sumanivel) {
        this.nivel += sumanivel;
    }

}

module.exports = Pokemon;