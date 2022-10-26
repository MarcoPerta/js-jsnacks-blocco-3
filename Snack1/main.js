// *Snack1*
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// -crea un array vuoto
// -inserisci un prompt per inserire numero nell array
// -inserisci il dato del prompt nell array
// -crea ciclo while con i<50
// -metti prime due righe nel while
// -crea variabile somma fuori dal while e dentro, somma tutti i valori inseriti dall'utente e messi nell'array

let array = [];

let somma= 0
// let insertnumber = parseInt(prompt('inserisci un numero'));
// console.log(insertnumber)

// array.push(insertnumber)
// console.log(array)


while(somma<50){

    let insertnumber = parseInt(prompt('inserisci un numero'));
    console.log(insertnumber)
    
    array.push(insertnumber)
    console.log(array)

    somma += insertnumber
    console.log(somma)

    somma++
}
