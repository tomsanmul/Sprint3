const Middleware = require('./middleware.js');
const Calculadora = require('./calculadora.js')

let dades = require("./fitxer.json")
const a = dades.numero1
const b = dades.numero2

const calculadora = new Calculadora()
const mdw = new Middleware(calculadora,a,b)

//Quadrat
mdw.use((a, next) => {
  console.log(`El cuadrat de ${a} es = ${a * 2}`);
  next();
});


//Cub
mdw.use((req, next) => {
  req.b = req.b * 3;
  next();
});


mdw.suma(a,b);
mdw.resta(a,b);
mdw.multiplica(a,b);
