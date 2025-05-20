const prompt = require('prompt-sync')();

let peso = parseFloat(prompt("Qual o seu peso em kg? "));
let altura = parseFloat(prompt("Qual é sua altura (em metros)? "));

if (peso > 0 && altura > 0) {
    let IMC = peso / (altura ** 2);
    let imcFormatado = IMC.toFixed(2);

    console.log(`Seu IMC é ${imcFormatado}.`);

    if (IMC < 18.5) {
        console.log("Classificação: Baixo peso");
    } else if (IMC < 25) {
        console.log("Classificação: Peso normal");
    } else if (IMC < 30) {
        console.log("Classificação: Sobrepeso");
    } else {
        console.log("Classificação: Obesidade");
    }
} else {
    console.log("Informações inválidas. Certifique-se de digitar valores positivos.");
}
