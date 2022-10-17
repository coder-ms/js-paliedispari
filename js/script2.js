/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto
 */

/*
let evenOrOdd = document.getElementById('numberOddEven');
let numberInput = document.getElementById('numberInput');
let textResult = document.querySelector('p');
*/

let btn = document.querySelector('button');

/*Funzione random number*/
function randomNumber(min, max) {
    const parse = parseInt(min, max);
    return Math.floor(Math.random() * (max - min) ) + min;
}

/*Somma e verifica */
function sumRandomNumbers()
{
    let numberRandom1 = randomNumber(1,5);
    let numberRandom2 = randomNumber(1,5);
    console.log(`numero user: ` + numberRandom1, `numero computer: ` + numberRandom2);
    let somma = 0;
    somma = numberRandom1 + numberRandom2;
    console.log(somma);

    // Stabilisco se la somma dei due numeri è pari o dispari e verifico chi ha vinto tramite ciclo if
    if((somma % 2) == 0 ){
        document.write("You: " + numberRandom1 + " Computer: " + numberRandom2 + " " + " somma: " + somma + " " + "-> You win the match" + "<br>" + "press F5 to refresh");
        //console.log('true');       
    } 
    else if ((somma % 2) != 0 ) {
        //console.log('false');
        document.write("You: " + numberRandom1 + " Computer: " + numberRandom2 + " " + " somma: " + somma + " " + " -> You lost the match" + "<br>" + "press F5 to refresh");
    }
}

//
btn.addEventListener('click', sumRandomNumbers);