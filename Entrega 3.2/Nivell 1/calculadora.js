class Calculadora {

    suma(a,b)  {
        console.log(`La suma de ${a} + ${b} es = ${a+b}`);
        return (a+b);
    }

    resta(a,b) {
        console.log(`La resta de ${a} - ${b} es = ${a-b}`);
        return (a-b);
    }

    multiplica(a,b) {
        console.log(`EL producte de ${a} * ${b} es = ${a*b}`);
        return (a*b);
    }

}

module.exports = Calculadora;