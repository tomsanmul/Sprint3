const Middleware = require('./middleware.js');
const Calculadora = require('./calculadora.js')

let dades = require("./fitxer.json")
const a = dades.numero1
const b = dades.numero2

const calculadora = new Calculadora()
const mdw = new Middleware(calculadora,a,b)

//Quadrat
mdw.use((a, next) => {
  let cuadrat = Math.pow(a, 2)
  console.log(`El cuadrat de ${a} es = ${cuadrat}`);
  next();
});


//Cub
mdw.use((req, next) => {
  let cub = Math.pow(req, 3)
  console.log(`El cub de ${a} es = ${cub}`);
  next();
});

//Divisio
mdw.use((req, next) => {
  req.b = req.b * 3;
  console.log(`La divisio de ${a} ente ${b} es = ${(a / b).toFixed(2)}`);
  next();
});



mdw.suma(a,b);
//mdw.resta(a,b);
//mdw.multiplica(a,b);
