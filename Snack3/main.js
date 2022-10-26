// *Snack3* (Bonus)
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array,
// ognuno formato da 10 numeri casuali da 1 a 100.
// Ogni volta che ne crei uno, stampalo.

// propmpt per inserire numero N dall'uetnte
// creare whlie con i<N
// genera N array
// N array deve avere 10 numeri casuali da 10 a 100

let n = parseInt(prompt('inserisci un numero'));
console.log(n)

let i=0
while(i<n){
  let array = []
//   console.log(array)
   while(array.length<10){
    array.push(Math.round(Math.random()*100)+1);
   }
   console.log(array);
  i++
}