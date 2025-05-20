const prompt = require('prompt-sync')();

let soma = 0, cont = 0, entrada;

do {
  entrada = parseFloat(prompt("Digite um número (ou 0 para sair): "));
  if (entrada !== 0) {
    soma += entrada;
    cont++;
  }
} while (entrada !== 0);

if (cont > 0) {
  console.log("Média dos números digitados:", (soma / cont).toFixed(2));
} else {
  console.log("Nenhum número válido foi digitado.");
}
