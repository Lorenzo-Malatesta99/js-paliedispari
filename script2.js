// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random
// (sempre da 1 a 5) per il computer(usando una funzione).Sommiamo i due numeri Stabiliamo se la somma dei due numeri
// è pari o dispari(usando una funzione) Dichiariamo chi ha vinto.

const userChoice = prompt("Scrivi se vuoi pari o dispari, tutto in minuscolo");
let userNum = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("Tu hai scelto: " + userNum + " e " + userChoice);

let randNum = Math.floor(Math.random() * 5) + 1;
console.log("Il computer ha scelto: " + randNum);

function isWinner(userNum, randNum) {
  return (userNum + randNum) % 2 === 0;
}

if (
  (isWinner(userNum, randNum) && userChoice === "pari") ||
  (!isWinner(userNum, randNum) && userChoice === "dispari")
) {
  console.log("Hai vinto tu!");
} else {
  console.log("Ha vinto il computer");
}
