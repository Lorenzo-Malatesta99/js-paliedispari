// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// prendiamo una variabile parola con prompt
// facciamo inserire la parola all'utente nella variabile parolaDritta
// creo una funzione isPalindroma che prende parola
// definisco una variabile parolaInversa
// inversione di parolaDritta con tre metodi dell'array
// Ritorna valore booleano true se le due parole sono usguali e false se sono diverse
// Se il valore di isPAlindroma è true
//   messaggio: è palindroma
// Altrimenti non è palindorma

let parolaDritta = prompt(
  "Inserisci la parola e ti diremo se è palindroma o meno"
);

function isPalindroma(parolaDritta) {
  let parolaInversa = parolaDritta.split("").reverse().join("");
  return parolaDritta === parolaInversa;
}
if (isPalindroma(parolaDritta)) {
     console.log("La parola " + parolaDritta + " è palindroma!")
} else {
    console.log("Mi dispiace la parola " + parolaDritta + " NON è palindroma")
 }
