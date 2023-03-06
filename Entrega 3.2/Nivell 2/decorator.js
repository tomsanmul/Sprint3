//LLlegim el fitxer JSON i carreguem les variables de conversió en monedes en variables
let dades = require("./currency_conversions.json")
const USD = dades.USD_EUR
const GBP = dades.GBP_EUR
const CHF = dades.CHF_EUR
const JPY = dades.JPY_EUR
const CAD = dades.CAD_EUR


function convertToEur(preu, moneda) {
    let total;
    switch (moneda) {

        case "USD":
            total = (preu * USD).toFixed(2);
            break;
        case "GBP":
            total =  (preu * GBP).toFixed(2);
            break;
        case "CHF":
            total =  (preu * CHF).toFixed(2);
            break;
        case "JPY":
            total =  (preu * JPY).toFixed(2);
            break;
        case "CAD":
            total =  (preu * CAD).toFixed(2);
            break;
        default:
            return ("ERROR, Moneda no definida");
    }
    return total;

}

function loggingDecorator(wrapped) {
    return function() {
        const result = wrapped.apply(this, arguments);
        return result;
      }
  }

const wrapped = loggingDecorator(convertToEur);



module.exports = wrapped;