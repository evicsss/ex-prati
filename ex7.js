const prompt = require('prompt-sync')();

let valor = 0;
let compra = parseInt(prompt("Quantas maçãs você deseja comprar? "));

if (compra > 0 && compra < 12) {
    valor = compra * 0.30;
    console.log("O valor da sua compra é: R$ " + valor.toFixed(2));
} else if (compra >= 12) {
    valor = compra * 0.25;
    console.log("O valor da sua compra é: R$ " + valor.toFixed(2));
} else {
    console.log("Quantidade inválida. Digite um número positivo.");
}
