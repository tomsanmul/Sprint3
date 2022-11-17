const Middleware = require('./middleware.js');
const Calculadora = require('./calculadora.js')

let dades = require("./fitxer.json")
const a = dades.numero1
const b = dades.numero2


const calculadora = new Calculadora (a, b)

const mdw = new Middleware()
mdw.addMiddelware()

  mdw.suma(a, b)
  mdw.resta(a, b)
  mdw.multiplica(a, b)
