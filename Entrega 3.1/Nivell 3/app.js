const Usuari = require("./usuari.js");
const Tema = require("./tema.js");

// Afegim Temes:
const tema1 = new Tema("Cotxes");
const tema2 = new Tema("Motos");
const tema3 = new Tema("Biciscletes");

// Afegim Usuaris:
const usuari1 = new Usuari("Tomas");
const usuari2 = new Usuari("Toni");
const usuari3 = new Usuari("Maria");

// Afegim subscriptors als Temes 
tema1.altaSubscripcio(usuari1);
tema2.altaSubscripcio(usuari2);
tema3.altaSubscripcio(usuari3);

//Provem les notificacions
tema1.notifica(tema1, `Missatge de prova del tema ${tema1.nomTema}`);
tema2.notifica(tema2, `Missatge de prova del tema ${tema2.nomTema}`);
tema3.notifica(tema3, `Missatge de prova del tema ${tema3.nomTema}`);

