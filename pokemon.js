class Pokemon {
    constructor(numero, nombre, nivel, tipo, ataque) {
        this.numero = numero,
            this.nombre = nombre,
            this.nivel = nivel,
            this.tipo = tipo,
            this.ataque = ataque
        if (this.tipo != 'agua' && this.tipo != 'fuego' && this.tipo != 'electrico' && this.tipo != 'planta') {
            throw new Error(`El tipo ${this.tipo} no existe`);
        }
    }

    subirNivel(sumanivel) {
        this.nivel += sumanivel;
    }

}

module.exports = Pokemon;