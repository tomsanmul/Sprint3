//LLlegim el fitxer JSON i carreguem les variables de conversió en monedes en variables
let dades = require("./currency_conversions.json")
const USD = dades.CAD_EUR
const GBP = dades.GBP_EUR
const CHF = dades.CHF_EUR
const JPY = dades.JPY_EUR
const CAD = dades.CAD_EUR


function convertToEur(preu, moneda) {
    switch (moneda) {

        case "USD":
            return (preu * USD).toFixed(2);
            break;
        case "GBP":
            return (preu * GBP).toFixed(2);
            break;
        case "CHF":
            return (preu * CHF).toFixed(2);
            break;
        case "JPY":
            return (preu * JPY).toFixed(2);
            break;
        case "CAD":
            return (preu * CAD).toFixed(2);
            break;
        default:
            return ("ERROR, Moneda no definida");
    }


}

module.exports = convertToEur;