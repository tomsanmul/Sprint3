//const Middleware = require('./middleware.js');
const fs = require('fs');

let datos = JSON.parse(fs.readFileSync('C:/Users/formacio/Desktop/Tomas/Sprint3/Entrega 3.2/Nivell 1/fitxer.json'));
console.log(datos);

function suma(numero1, numero2){
    return (numero1 + numero2);
}

function resta(numero1, numero2){
    return (numero1 - numero2);
}

function multiplica(numero1, numero2){
    return (numero1 * numero2);
}

let resultat;
resultat = suma(datos.numero1, datos.numero2);
console.log(`La SUMA de ${datos.numero1} + ${datos.numero2} es ${resultat}`);
resultat = resta(datos.numero1, datos.numero2);
console.log(`La RESTA de ${datos.numero1} - ${datos.numero2} es ${resultat}`);
resultat = multiplica(datos.numero1, datos.numero2);
console.log(`La MULTIPLICACIÓ de ${datos.numero1} * ${datos.numero2} es ${resultat}`);
