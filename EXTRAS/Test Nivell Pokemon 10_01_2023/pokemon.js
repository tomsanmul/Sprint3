class Pokemon {
    constructor(numero, nombre, nivel, tipo, ataques) {
        // Comprovem que el tipus sigui agua, fuego, electrico ó planta
        if (!['agua', 'fuego', 'electrico', 'planta'].includes(tipo)) {
            throw new Error(`El tipo ${tipo} no existe`);
        }

        // Comprovem que la longitud del array d'atacs sigui d'entre 1 i 4 
        if ((ataques.length > 4) || (ataques.length < 1)) {
            throw new Error(`El numero de ataques debe ser entre 1 y 4`);
        }

        // Comprovem que els noms de les propietats dels Atacs siguin '.nombre i '.potencia'
        for (let i = 0; i < ataques.length; i++) {
            if (!ataques[i].nombre) {
                throw new Error(`El ataque no tiene nombre`);
            }
            if (!ataques[i].potencia) {
                throw new Error(`El ataque no tiene potencia`);
            }
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