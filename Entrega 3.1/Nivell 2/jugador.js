class Jugador {
    constructor(nomJugador, puntuacio) {
        this.nomJugador = nomJugador,
        this.puntuacio = puntuacio
    }

    afegeixPunts(punts){
        this.puntuacio += punts;
    }
}

module.exports = Jugador;