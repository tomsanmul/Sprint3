const Usuari = require("./usuari.js");
const Tema = require("./tema.js");


console.log("<---------AFEGIM TEMES---------->");
const tema1 = new Tema("Cotxes");
const tema2 = new Tema("Motos");
const tema3 = new Tema("Bicicletes");
console.log("");

console.log("<---------AFEGIM USUARIS---------->");
const usuari1 = new Usuari("Tomas");
const usuari2 = new Usuari("Marta");
const usuari3 = new Usuari("Maria");
const usuari4 = new Usuari("Alex");
const usuari5 = new Usuari("Omar");
const usuari6 = new Usuari("Ivan");
console.log("");

console.log("<------ AFEGIM USUARIS ALS TEMES -------->"); 

tema1.altaSubscripcio(usuari1);
tema1.altaSubscripcio(usuari2);
tema1.altaSubscripcio(usuari3);
tema1.altaSubscripcio(usuari4);
console.log("");

tema2.altaSubscripcio(usuari2);
tema2.altaSubscripcio(usuari3);
tema2.altaSubscripcio(usuari5);
tema2.altaSubscripcio(usuari6);
console.log("");

tema3.altaSubscripcio(usuari1);
tema3.altaSubscripcio(usuari2);
tema3.altaSubscripcio(usuari3);
tema3.altaSubscripcio(usuari6);

console.log("");

console.log("<------------------- PROVEM LES NOTIFICACIONS ----------------------->");
console.log("");

usuari1.enviarMissatge(tema1, "Hola com esteu");
console.log("");

usuari2.enviarMissatge(tema2, "demà aniré a la piscina");
console.log("");

usuari3.enviarMissatge(tema3, "avui fa un bon dia");
console.log("");
