// console.log('js ok')

// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


const email = ['email1@gmail.com', 'email2@gmail.com', 'email3@gmail.com', 'email4@gmail.com', 'email5@gmail.com'];

const value = prompt('inserisci la tua email');


for (let i = 0; i < email.length; i ++){
    

    if(value == email[i]) {
        console.log('utente registrato');
        break
    }
    
    else if(value != email[i]){
        console.log('utente non registrato');
        break
    } 
    
}
// fine parte accettazione




// dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// numeri random con dichiarazione max e min
max = 6;
min = 1;

let numberUser = Math.floor(Math.random() * (max - min + 1) + min);
console.log('il tuo numero è ' + numberUser)

let numberBot = Math.floor(Math.random() * (max - min + 1) + min);
console.log('il numero del computer è ' + numberBot)
// fine numeri random con dichiarazione max e min


// scelta vincitore
if (numberBot > numberUser){
    console.log('Ha vinto il computer')


} else if(numberBot < numberUser){
console.log('Hai vinto!')
}
// fine scelta vincitore



    





