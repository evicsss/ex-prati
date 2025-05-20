const prompt = require('prompt-sync')();

let nu = parseInt(prompt("Digite um numero inteiro: "))

if (nu % 2 === 0) {
    console.log("Este número é par!")

} else {
    console.log("Este numero é ímpar!")
}