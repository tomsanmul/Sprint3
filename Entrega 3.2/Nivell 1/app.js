const Middleware = require('./middleware.js');
const Calculadora = require('./calculadora.js')

let dades = require("./fitxer.json")
const a = dades.numero1
const b = dades.numero2

const calculadora = new Calculadora (a, b)

  calculadora.suma(a, b)
  calculadora.resta(a, b)
  calculadora.multiplica(a, b)

