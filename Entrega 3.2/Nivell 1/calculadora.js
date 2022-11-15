const { Console } = require("console")

class Calculadora {

    constuctor(numero1, numero2) {
        this.num1 = numero1
        this.num2 = numero2
    }

    suma(numero1, numero2)  {
        console.log(`La SUMA de ${numero1} + ${numero2} es ${numero1 + numero2}`)
    }

    resta(numero1, numero2) {
        console.log(`La RESTA de ${numero1} - ${numero2} es ${numero1 - numero2}`)
    }

    multiplica(numero1, numero2) {
        console.log(`La MULTIPLICACIÓ de ${numero1} * ${numero2} es ${numero1 * numero2}`)
    }

}

module.exports = Calculadora;