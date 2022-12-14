const Articles = require('./articles.js');
const wrapped = require("./decorator.js");


//DECORATOR: -> una funcio que aqfegeix una propietat es un decorator

//Creo els articles i els afegeixo en un array
let articles = [
    new Articles('Pantalons', 29.35, 'USD'),
    new Articles('Samarreta', 8.45, 'GBP'),
    new Articles('Jersei   ', 20.46, 'CHF'),
    new Articles('Jaqueta  ', 4000, 'JPY'),
    new Articles('Sabates  ', 42.77, 'CAD')
]



//Crido a wrapped, que està en el decorator.js
articles.forEach(article => {
        console.log(`${article.nom} - ${article.preu} ${article.moneda} <- costarà -> ${wrapped(article.preu,article.moneda)} EUR.`);
});


/*
// Manera tradicional de recòrrer l'array amb buble FOR,  fa el mateix que Foreach
for (let i = 0; i < articles.length; i++) {
    let preuEur = convertToEur(articles[i].preu, articles[i].moneda);
    console.log(`${articles[i].nom} - ${articles[i].preu} ${articles[i].moneda} <--> ${preuEur} EUR.`);
}
*/