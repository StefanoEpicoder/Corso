/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Abbiamo diverse tipologie di dati primitivi ed un dato complesso, nella prima categoria troviamo le stringhe, i numeri, i valori booleani
null e undefined; nella secoda troviamo gli oggetti.
"Le stringhe" sono caratteri contenuti all'interno degli apici singoli o doppi, non c'è una regola che imponga l'utilizzo di uno o dell'altro,
l'importante è che se si utilizza un singolo apice in apertura, si dovrà chiudere con lo stesso demilitatore.
Possiamo inserire caratteri speciali con\ come per esempio decidere di andare a capo: in questo caso abbiamo \n
Esiste anche la stringa vuota"" o ''
Inoltre se il delimitatore è preceduto dal simbolo\ questi assumerà un valore di testo normale.
I numeri si possono inserire senza delimitatori ed esiste un solo tipo di dato numerico per tutto.
Poi abbiamo i dati booleani composti solo da due valori: true e false.
Il tipo di dato null invece ha solo un valore possibile che è diverso da zero e dalla stringa vuota.
Infine  abbiamo il dato undefined, prevede un solo valore, ovvero undefined e rappresenta un valore che non esiste.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/*    <script>
        var name = "Stefano"
      </script> */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* <script>

        var numero1 = 12;
        var numero2 = 20;
        console.log(numero1 + numero2);
        
      </script>
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* <script>
          var x = 12;
</script> */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* 
<script>
        let name = "DAntoni"
        name = "gianmarco"
        console.log(name)

        const LUCA = 12345
        LUCA = 6789
        console.log(LUCA)
</script> */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* 
<script>   
        let subtraction = 4 - x;
        console.log(subtraction)
</script>
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* 
<script>
        var name1 = "john";
        var name2 = "John";
        console.log('name1 e name2 sono uguali:', name1 === name2);
        console.log('name1 e name2 in lowercase sono uguali:' , name1.toLowerCase() === name2.toLowerCase());
</script>
      
*/
