/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
var l = 2
var m = 2
if (l > m) {
  console.log(l + " è più grande di " + m);
} else if(l < m) {
  console.log(l + " è più piccolo di " + m);
} else { 
  console.log(l + " è uguale a " + m);
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let r = 4
if (r != 5)
console.log(r + " non è uguale a "+ 5)


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let t = 9;
if(t%5 == 0) {
    console.log(t + " è perfettamente divisibile per 5 ");
} else {
    console.log(t + " non è divisibile per 5 ");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let y1 = 13;
let y2 = 10;

if (y1 === 8 || y2 === 8 || y1 + y2 === 8 || y2 - y1 === 8) {
console.log("verificato");
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 65;
let shippingCost = 10;

if (totalShoppingCart > 50) {
    console.log("totale da pagare: " + totalShoppingCart);
} else {
    console.log( "totale da pagare: " + (totalShoppingCart + shippingCost) );
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totaleShopping2 = 65;
totaleShopping2 = totaleShopping2 * 0.8;
let shipping2 = 10;
let amountToPay2 += shipping2

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let test = 'ciao'

if (typeof test === 'number') {
  console.log('è un numero')
} else {
  console.log('è una stringa')
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let x2 = 5;
if (x2%2 == 0) {
    messaggio = x2 + " è pari";
} else if (x2%2 == 1) {
    messaggio = x2 + " è dispari";
} else {
    messaggio = x2 + " non è un numero"
}
console.log(messaggio)

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

io.city = "Toronto";
console.log(me)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log(me)


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop()
console.log(me)


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let mioArray = []
mioArray.push(1)
mioArray.push(2)
mioArray.push(3)
mioArray.push(4)
mioArray.push(5)
mioArray.push(6)
mioArray.push(7)
mioArray.push(8)
mioArray.push(9)
mioArray.push(10)  
console.log(mioArray)


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

mioArray.push(100)
