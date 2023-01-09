//-------------------------Exercici 1
//Given a string, make every consonant after a vowel uppercase.
//Can you do this and without regex?

function capitalAfterVowel(cadena) {

    let cadenafinal = "";

    let vocales = ['a', 'e', 'i', 'o', 'u', ' '];


    for (i = 0; i < cadena.length; i++) {

        //Si el caracter actual no está en el array de les vocals, i el caracter anterior si está en el arr de vocales, fem uppercase
        if ((vocales.indexOf(cadena[i]) == -1) && (vocales.indexOf(cadena[i - 1] > 0))) {

            cadenafinal += cadena[i].toUpperCase();
        }
        //sino, copiem tal cual la lletra
        else {
            cadenafinal += cadena[i];
        }

    }
    //Mostrem el resultat final
    console.log(cadenafinal);
}

capitalAfterVowel("hello world");
capitalAfterVowel("xaaBeuekadii");



//-------------------------Exercici 2
//Given a number, sum every second digit in that number.

function sumEveryOther(numero) {
    let acumulador = 0;
    let strnumero = numero.toString();
    for (i = 1; i < strnumero.length; i = i + 2) {
        acumulador += parseInt(strnumero[i]);
    }
    console.log(acumulador);
}

sumEveryOther(548915381);
sumEveryOther(10);
sumEveryOther(1010.11);



//--------------------------Exercici 3
//Given an array of integers arr and an integer n, return a subarray of arr of
//length n where the sum is the largest. Make sure you maintain the order of the
//original array, and if n is greater than arr.length, you can choose what you want to return

function maxSubArray(arrayOriginal, posicion) {

    let sumaValores = 0,
        sumaMaxima = 0;

    let i = 0,
        j = 0,
        vueltas = arrayOriginal.length - posicion + 1;

    let arrayDefinitivo = [],
        arrayTemporal = [];

    if (posicion > arrayOriginal.length) {
        console.log("No se puede dedolver un subArray mas grande que el original.");
        return;
    } else {

        for (i = 0; i < vueltas; i++) {

            for (j = i; j < (posicion + i); j++) {
                sumaValores = +arrayOriginal[j];
                arrayTemporal.push(arrayOriginal[j]);
            }

            if (sumaValores > sumaMaxima) {
                sumaMaxima = sumaValores;
                arrayDefinitivo = arrayTemporal;
            }

            //borramos el array y la sumaValores, y vuelta a empezar
            sumaValores = 0;
            arrayTemporal = [];
        }
    }
    console.log(arrayDefinitivo);
    return;
}

maxSubArray([-4, 2, -5, 1, 2, 3, 6, -5, 1], 4);
maxSubArray([1, 2, 0, 5], 2);



//Exercici 4 
//Given a string of any length which contains only digits frin 0 to 9, 
//replace each consecutive run of the digit 0 with its length.