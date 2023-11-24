
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

let btnDice = document.getElementById("btnDice")
btnDice.addEventListener("click" , function(){
    document.getElementById('playerDice').innerHTML = "";
    document.getElementById('pcDice').innerHTML = "";
    document.getElementById('howWin').innerHTML = "";

    let playerDice = Math.floor(Math.random()* 6 +1);
    let pcDice = Math.floor(Math.random()* 6 +1);

    document.getElementById('playerDice').innerHTML += playerDice;
    document.getElementById('pcDice').innerHTML += pcDice;

    if(playerDice > pcDice){
        document.getElementById('howWin').innerText += " hai vinto";
        console.log("hai vinto")
    }
    else if(playerDice < pcDice){
        document.getElementById('howWin').innerText += " hai perso";
        console.log("hai perso")
    }
    else{
        document.getElementById('howWin').innerText += " pareggio";
        console.log("pareggio")
    }
})

