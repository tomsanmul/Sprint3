const {
  readdir,
  readFile,
  writeFile
} = require("fs");

const {
  join
} = require("path");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");



//**********************************************************************************************************/
// NOU CODI NoHell .   Bàsicament he desglosat les 3 funcions LLegirDirectori, LLegirFitxer i EscriureFitxer
//**********************************************************************************************************/

function llegirDirectori(inbox) {
  return new Promise((resolve, reject) => {
    readdir(inbox, (error, files) => {
      if (error) reject(new Error("Error: Folder inaccessible"));
      resolve(files);
    });
  });
}

function llegirFitxer(fitxer) {
  return new Promise((resolve, reject) => {
    readFile(fitxer, "utf8", (error, data) => {
      if (error) reject(new Error("Error: File error"));
      resolve(data);
    });
  });
}

function escriureFitxer(fitxer, cadena) {
  return new Promise((resolve, reject) => {
    writeFile(join(outbox, fitxer), cadena, error => {
      if (error) reject(new Error("Error: File could not be saved!"));
        resolve(console.log(`${fitxer} file was successfully saved in the outbox!`));
    });
  });
}



async function NoHell() {
  try {
    let fitxer = await llegirDirectori(inbox);
    let str_cadena = [];
    for (i = 0; i < fitxer.length; i++) {
      str_cadena[i] = await llegirFitxer(join(inbox, fitxer[i]));
      str_cadena[i] = reverseText(str_cadena[i]);
      await escriureFitxer(fitxer[i], str_cadena[i]);
    }
  } catch (err) {
    console.log(err)
  }
}

NoHell();