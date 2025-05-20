const prompt = require('prompt-sync')();

let numero = Number(prompt('Digite um número inteiro não negativo: '));

if (!Number.isInteger(numero) || numero < 0) {
    console.log('Número inválido. Por favor, digite um inteiro não negativo.');
} else {
    let fat = 1;
    for (let i = 1; i <= numero; i++) {
        fat *= i;
    }
    console.log(`O fatorial de ${numero} é ${fat}`);
}
