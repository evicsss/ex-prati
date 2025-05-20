const prompt = require('prompt-sync')();

console.log("Escolha uma das opções: 1, 2 ou 3");
let escolha = prompt("Qual opção você deseja? ");

switch(escolha) {
    case '1':
        console.log("Você escolheu a opção 1!");
        break;
    case '2':
        console.log("Você escolheu a opção 2!");
        break;
    case '3':
        console.log("Você escolheu a opção 3!");
        break;
    default:
        console.log("Opção inválida!");
}
