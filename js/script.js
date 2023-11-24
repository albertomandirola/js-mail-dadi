
/* //esercizio parte 1
// - creare una lista di miail
// - chiedere all utente di aggiungere una mail
// - convalidare tramite ciclo for se la mail è presente nella lista
// - se mail presente dichiarare che la mail è presente
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
 */


//esercizio parte 2

let playerDice = Math.floor(Math.random()* 6 +1);
let pcDice = Math.floor(Math.random()* 6 +1);
if(playerDice > pcDice){
    console.log("hai vinto")
}
else if(playerDice < pcDice){
    console.log("hai perso")
}
else{
    console.log("pareggio")
}