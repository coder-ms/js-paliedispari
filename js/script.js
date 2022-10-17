/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

let testo = document.querySelector('p');
let btn = document.getElementById('verifyWordPalindrome');



function palidroma(word, arrayWord, arrayReverseWord, reverseWord){

    word = document.getElementById('wordToPalindrome').value;

    // divido la stringa in sottostringe(carattere per carattere)
    arrayWord = word.split('');
    console.log(arrayWord);

    // reverse della stringa 
    arrayReverseWord = arrayWord.reverse();
    console.log(arrayReverseWord)
    
    // riunisco la reverse della stringa originale
    reverseWord = arrayReverseWord.join('');

    /*Verifico se la parola inserita è palindroma o meno */
    if(word == reverseWord){
        console.log('palindroma');
        testo.innerHTML= 'è palindroma';
    }
    else if(word != reverseWord) {
        console.log('non palindroma');
        testo.innerHTML= 'non è palindroma';
    }

}
btn.addEventListener('click', palidroma);

