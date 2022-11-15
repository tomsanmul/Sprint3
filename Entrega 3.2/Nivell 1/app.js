//const Middleware = require('./middleware.js');
const Calculadora = require('./calculadora.js')

const fs = require('fs')
let dades = require("./fitxer.json")
const a = dades.numero1
const b = dades.numero2

const operacions = new Calculadora (a, b)

operacions.suma(a, b)
operacions.resta(a, b)
operacions.multiplica(a, b)

