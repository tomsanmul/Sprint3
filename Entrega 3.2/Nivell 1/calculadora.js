class Calculadora {

    suma(parametres) {
        return (parametres.a + parametres.b);
    }

    resta(parametres) {
        return (parametres.a - parametres.b);
    }

    multiplica(parametres) {
        return (parametres.a * parametres.b);
    }

}

module.exports = Calculadora;