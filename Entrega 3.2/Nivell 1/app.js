//const Middleware = require('./middleware.js');
const Calculadora = require('./calculadora.js')

const fs = require('fs')
let dades = require("./fitxer.json")

const operacions = new Calculadora (dades.numero1, dades.numero2)
operacions.suma(dades.numero1, dades.numero2)
operacions.resta(dades.numero1, dades.numero2)
operacions.multiplica(dades.numero1, dades.numero2)

