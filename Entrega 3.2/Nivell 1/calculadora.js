class Calculadora {

    suma(parametres)  {
        console.log(`La suma de ${parametres.a} + ${parametres.b} es = ${parametres.a + parametres.b}`);
        return (parametres.a+parametres.b);
    }

    resta(parametres) {
        console.log(`La resta de ${parametres.a} - ${parametres.b} es = ${parametres.a - parametres.b}`);
        return (parametres.a - parametres.b);
    }

    multiplica(parametres) {
        console.log(`EL producte de ${parametres.a} * ${parametres.b} es = ${parametres.a * parametres.b}`);
        return (parametres.a * parametres.b);
    }

}

module.exports = Calculadora;