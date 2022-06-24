
console.log("js ok")
/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilisci il vincitore, in base a chi fa il punteggio più alto e stampa  in console il risultato (ossia se ha vinto il computer o il player)
*/


const min = 1
const max = 6


utente = document.getElementById("targetUtente")
cpu = document.getElementById("targetCpu")
let generate = document.getElementById("targetGenerate")
let result = document.getElementById("targetResult")


let numeroUtente = Math.floor(Math.random()*(max - min + 1)+ min)

let numeroCpu = Math.floor(Math.random()*(max - min + 1)+ min)


/*Genera due numeri casuali al click*/ 
generate.addEventListener("click", function()
{
   utente.innerText = numeroUtente
   cpu.innerText = numeroCpu

   if(numeroUtente > numeroCpu && numeroUtente !== 0) {
    result.innerText = "Hai vinto"
    }
    else {
    result.innerText = "Hai perso"
}
})






    
    




