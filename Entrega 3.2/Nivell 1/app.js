const Middleware = require('./middleware.js');
const Calculadora = require('./calculadora.js');

let dades = require("./fitxer.json");
const a = dades.numero1;
const b = dades.numero2;

const calculadora = new Calculadora();
const mdw = new Middleware(calculadora);

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
  console.log(`La divisio de ${req.b} entre ${req.a} es = ${(req.a / req.b).toFixed(2)}`);
  next();
});


console.log(`La suma de ${a} + ${b} es = ${mdw.suma({a,b})}`);
console.log("-------------------------------");
console.log(`La resta de ${a} + ${b} es = ${mdw.resta({a,b})}`);
console.log("-------------------------------");
console.log(`La multiplicació de ${a} * ${b} es = ${mdw.multiplica({a,b})}`);
console.log("-------------------------------");

