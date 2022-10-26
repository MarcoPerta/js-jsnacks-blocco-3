// *Snack2*
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// creo un while di 5 cicli
// metto propmt per chiedere all'utente un numero
// sommare numeri inseriti (metterei fuori da while) con variabile += con tutti i valori del prompt

let somma =0;
i=0;
while(i<5){
    let insertnumber = parseInt(prompt('inserisci un numero'));
    console.log(insertnumber);
    
    somma += insertnumber;
    console.log(somma);

    i++

}

// somma += insertnumber;
// console.log(somma);