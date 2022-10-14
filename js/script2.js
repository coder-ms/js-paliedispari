/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto
 */


let evenOrOdd = document.getElementById('numberOddEven');
let numberInput = document.getElementById('numberInput');
let btn = document.querySelector('button');
let textResult = document.querySelector('p');

/*Funzione random number*/
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

/*Somma e verifica */
function sumRandomNumbers()
{
    let numberUser = numberInput.value;
    let numberOddEven = evenOrOdd.value;
    //
    console.log( "numberUser = " + numberUser);
    console.log( "numberOddEven = " + numberOddEven);

    // sommo il numero inserito con il numero random del computer
    let numberRandom = randomNumber(1,5);
    console.log( "numberRandom = " + numberRandom);

    let somma = numberUser + numberRandom;
    console.log( "sommauser_random = " + somma );
    

    // Stabilisco se la somma dei due numeri è pari o dispari e verifico chi ha vinto tramite ciclo if
    if((somma % 2) === 0 && numberOddEven === 'even' ){
        textResult.innerHTML = "You Win! Try Again";
        //console.log('true');
        return true;
       
    } 
    else if ((somma % 2) === 0 && numberOddEven === 'odd' ) {
        //console.log('false');
        textResult.innerHTML = "You Lost! Try Again";
        return false;
    }
}

//
btn.addEventListener('click', sumRandomNumbers);