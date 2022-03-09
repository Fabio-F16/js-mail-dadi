const verifyEmail = document.querySelector ('#email > button');


verifyEmail.addEventListener('click', function () {

   

    const email = ['email1@gmaill.com', 'email2@gmail.com', 'email3@gmail.com', 'email4@gmail.com', 'email5@gmail.com'];
    const inputEmail = document.querySelector ('#email > input').value;
    let controllo = false;
    // console.log(inputEmail);
    

    for (let i = 0; i < email.length; i++) {
    
       
        if(inputEmail == email[i]) {
            controllo = true;
            console.log('utente registrato');
           
            break;
        } 
       
    }


 
    if(controllo == false){
        console.log('utente non registrato');
       
    } 

})


// fine controllo email


// inizio dadi



// inizio dadi giusti
const dadiGenerator = document.querySelector('#dadi > button')

numberComputer = document.querySelector('.computer')
numberUser = document.querySelector('.utente')

dadiGenerator.addEventListener('click', function () {

    max = 6;
    min = 1;
    
    let numberUser = Math.floor(Math.random() * (max - min) + min);
    console.log('il tuo numero è ' + numberUser)
    
    let numberBot = Math.floor(Math.random() * (max - min) + min);
    console.log('il numero del computer è ' + numberBot)  
   
    if (numberBot > numberUser){
    console.log('Ha vinto il computer');




    }
    
    if(numberBot < numberUser){
    console.log('Hai vinto!');
    }

    

})




