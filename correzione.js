const verifyEmail = document.querySelector ('#email > button');


verifyEmail.addEventListener('click', function () {

   

    const email = ['email1@gmaill.com', 'email2@gmail.com', 'email3@gmail.com', 'email4@gmail.com', 'email5@gmail.com'];
    const inputEmail = document.querySelector ('#email > input');
    

    for (let i = 0; i < email.length; i ++) {
    
       


        if(inputEmail == email[i]) {
            console.log('utente registrato');
           
           
        } if(inputEmail != email[i]){
            console.log('utente non registrato');
            break
        } 
        
    }




})