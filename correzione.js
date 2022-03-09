// inizio controllo email
const verifyEmail = document.querySelector ('#email .row button');

verifyEmail.addEventListener('click', function () {

    const email = ['email1@gmaill.com', 'email2@gmail.com', 'email3@gmail.com', 'email4@gmail.com', 'email5@gmail.com'];
    const inputEmail = document.querySelector ('#email .row input').value;
    let controllo = false;
    // console.log(inputEmail);
    

    for (let i = 0; i < email.length; i++) {
    
        if(inputEmail == email[i]) {
            controllo = true;
            console.log('utente registrato');
            document.querySelector('.risultatoRegistrazione').innerText = 'Utente registrato';
            break;
        } 
    }

    if(controllo == false){
        console.log('utente non registrato');
        document.querySelector('.risultatoRegistrazione').innerText = 'Utente non registrato' ;
    } 

})
// fine controllo email



// inizio dadi
const dadiGenerator = document.querySelector('#dadi .container button')

dadiGenerator.addEventListener('click', function () {

    max = 6;
    min = 1;
    
    let numberUser = Math.floor(Math.random() * (max - min) + min);
    console.log('il tuo numero è ' + numberUser)
    document.querySelector('.utente').innerText = 'Il tuo numero è ' + numberUser;
    
    let numberBot = Math.floor(Math.random() * (max - min) + min);
    console.log('il numero del computer è ' + numberBot)  
    document.querySelector('.computer').innerText = 'Il numero del computer è ' + numberBot;
   
    if (numberBot > numberUser){
    console.log('Ha vinto il computer');
    document.querySelector('.risultato').innerText = 'Hai perso :-(';
    }
    
    if(numberBot < numberUser){
    console.log('Hai vinto!');
    document.querySelector('.risultato').innerText = 'Hai vinto!!';
    } 

    if(numberBot === numberUser){
    console.log('Hai vinto!');
    document.querySelector('.risultato').innerText = 'Hai pareggiato, ritenta!!';
    }

})
// fine dadi



