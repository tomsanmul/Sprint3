const Middleware = require('./middleware.js');
const Calculadora = require('./calculadora.js')

let dades = require("./fitxer.json")
const a = dades.numero1
const b = dades.numero2


const calculadora = new Calculadora(a, b)
const mdw = new Middleware(calculadora)


// Quadrat
mdw.use((req, next) => {
  req.a = req.a * req.a;
  req.b = req.b * req.b;
  console.log('El quadrat de a es: ' + req.a)
  console.log('El quadrat de b es: ' + req.b)
  next();
});



mdw.suma(a, b);