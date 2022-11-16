const Middleware = require('./middleware.js');
const Calculadora = require('./calculadora.js')

const fs = require('fs')
let dades = require("./fitxer.json")
const a = dades.numero1
const b = dades.numero2

const calculadora = new Calculadora (a, b)


const middleware = new Middleware(calculadora)

// Quadrat
middleware.use((req, next) => {
    req.a = req.a * req.a;
    req.b = req.b * req.b;
    console.log('quadrat a: ' + req.a)
    console.log('quadrat b: ' + req.b)
    next();
  });

  calculadora.suma(a, b)
  calculadora.resta(a, b)
  calculadora.multiplica(a, b)

