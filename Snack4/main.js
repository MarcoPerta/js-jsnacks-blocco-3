// *Snack4 (Bonus)*
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
// Interrompi il ciclo appena il nome è stato trovato.

// crea array con nomi
// prompt per chiedere nome e se può patecipare alla festa
// creare variabile soldatino true per le due opzioni se si verifica true se no false
// crea if dentro while con due opzioni
// console log se puo o non può

let invited = ['marco','paolo','luca','gianni'];
console.log(invited);

let ask = prompt('inserisci nome');
console.log(ask);

let nomeDaTrovare = false;

let i=0;
while(i<invited.length){

    if(invited[i] === ask){
        nomeDaTrovare = true;
    }

    i++
}

if(nomeDaTrovare==true){
    console.log('può accedere');
}
else{
    console.log('NON SEI INVITATO');
}
