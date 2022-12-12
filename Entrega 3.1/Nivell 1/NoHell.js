const {
  readdirSync,
  readFileSync,
  writeFileSync
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
  return (readdirSync(inbox));
}

function llegirFitxer(fitxer) {
  return (readFileSync(join(inbox, fitxer), "utf8"));
}

function escriureFitxer(fitxer, cadena) {
  return (writeFileSync(join(outbox, fitxer), reverseText(cadena)));
}



function NoHell() {
  const fitxers = llegirDirectori(inbox);
  fitxers.forEach(fitxer => {
    try {
      const cadena = llegirFitxer(fitxer);
      escriureFitxer(fitxer, cadena);
      console.log(`${ fitxer } was successfully saved in the outbox!`);
    } catch (error) {
      console.log("Error: File could not be saved!");
    }
  });

}

NoHell();