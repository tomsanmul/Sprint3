class Calculadora {

    constuctor(a, b) {
        this.a = a
        this.a = b
    }

    suma(a, b)  {
        console.log(`La SUMA de ${a} + ${b} es = ${a + b}`)
    }

    resta(a, b) {
        console.log(`La RESTA de ${a} - ${b} es = ${a - b}`)
    }

    multiplica(a, b) {
        console.log(`La MULTIPLICACIÓ de ${a} * ${b} es = ${a * b}`)
    }

}

module.exports = Calculadora;