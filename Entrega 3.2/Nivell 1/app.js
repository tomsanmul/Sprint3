//const Middleware = require('./middleware.js');
const calculadora = require('./calculadora.js');

const fs = require('fs');

let dades = require("./fitxer.json")
console.log(dades);


calculadora.suma(dades.numero1, dades.numero2);
calculadora.resta(dades.numero1, dades.numero2);
calculadora.multiplica(dades.numero1, dades.numero2);

