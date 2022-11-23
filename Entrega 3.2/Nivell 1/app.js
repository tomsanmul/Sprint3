const Middleware = require('./middleware.js');
const Calculadora = require('./calculadora.js')

let dades = require("./fitxer.json")
const a = dades.numero1
const b = dades.numero2

const calculadora = new Calculadora()
const mdw = new Middleware(calculadora,a,b)

//Quadrat
mdw.use((req, next) => {
  console.log(`El cuadrat de ${req.a} es = ${Math.pow(req.a, 2)}`);
  console.log(`El cuadrat de ${req.b} es = ${Math.pow(req.b, 2)}`);
  next();
});


//Cub
mdw.use((req, next) => {
  console.log(`El cub de ${req.a} es = ${Math.pow(req.a, 3)}`);
  console.log(`El cub de ${req.b} es = ${Math.pow(req.b, 3)}`);
  next();
});


//Divisio
mdw.use((req, next) => {
  console.log(`La divisio de ${req.a} entre ${req.b} es = ${(req.a / req.b).toFixed(2)}`);
  next();
});


mdw.suma({a,b});
console.log("----------------------------------------")
mdw.resta({a,b});
console.log("----------------------------------------")
mdw.multiplica({a,b});
