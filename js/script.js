let comparison = false;
let list_mail = ['pippobaudo@gmail.com','alberto@gmail.com','thomas@gmail.com','antoniio@gmail.com']
let email = prompt('inserisci la tua em0ail');

for(let i = 0; i<list_mail.length; i++){
    if(email == list_mail[i]){
        comparison = true
    }
}
if (comparison == true){
    alert('PUOI ACCEDERE')
}
else{
    window.location.reload()
}