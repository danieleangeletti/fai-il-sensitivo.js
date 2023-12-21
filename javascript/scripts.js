/*
  Fai il sensitivo
  Scrivi una funzione che calcoli la vicinanza tra tre numeri: A, B e N, e restituisca:
    - 0 Se A e B sono equidistanti da N
    - 1 Se B è più vicino a N rispetto ad A
    - -1 Se A è più vicino a N rispetto a B

  Variante:
  Utilizza questa funzione per creare un programma che simuli un gioco tra due utenti:
  vince chi indovina per primo il numero N che verrà generato casualmente tra 1 e 100.

  Consigli per la variante:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Se non ricordi come richiedere all'utente un valore in input, rivedi l'esercizio sugli array "Azzecca e azzera"

  http://www.imparareaprogrammare.it
*/

let first_user_number = parseInt(prompt("Inserisci un numero:"));
let second_user_number = parseInt(prompt("Inserisci un numero:"));
let casual_number = generateRandomInt(1, 100);

while (first_user_number != casual_number && second_user_number != casual_number) {

    console.log(first_user_number, second_user_number, casual_number);

    console.log(sensitive(first_user_number, second_user_number, casual_number));

    first_user_number = parseInt(prompt("Inserisci un numero:"));
    second_user_number = parseInt(prompt("Inserisci un numero:"));

    if (first_user_number == casual_number && second_user_number == casual_number) {
        console.log("Pareggio!");
    }

    else if (first_user_number == casual_number) {
        console.log("First user ha vinto!");
    }

    else if (second_user_number == casual_number) {
        console.log("Second user ha vinto!");
    }

}

// FUNCTIONS

function sensitive(a, b, n) {

    const n_minus_a = Math.abs(n - a);
    const n_minus_b = Math.abs(n - b);
    
    if (n_minus_a == n_minus_b) {
        return ("A e B sono equidistanti da N");
    }

    if (n_minus_a > n_minus_b) {
        return ("B è più vicino a N rispetto ad A");
    }

    if (n_minus_a < n_minus_b) {
        return ("A è più vicino a N rispetto a B");
    }

}

function generateRandomInt(min, max) {
    return Math.floor((Math.random() * (max + 1 - min)) + min);
  }