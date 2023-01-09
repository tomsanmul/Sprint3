//---------------Exercici 1
function capitalAfterVowel(cadena){

    let cadenafinal="";

    let vocales = ['a','e','i','o','u',' '];


    for(i=0;i< cadena.length;i++){

        if ((vocales.indexOf(cadena[i]) == -1) && (vocales.indexOf(cadena[i-1] > 0))){   //Si el caracter actual es consonante y el anterior es vocal, hacemos uppercase
            
            cadenafinal += cadena[i].toUpperCase();
        }
        else
        {
            cadenafinal += cadena[i];
        }

    }

    console.log(cadenafinal);
}

capitalAfterVowel("hello world");
capitalAfterVowel("xaaBeuekadii");





//----------------Exercici 2

