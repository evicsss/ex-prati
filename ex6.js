const prompt = require('prompt-sync')();

let a = Number(prompt("Informe o lado A do triângulo: "));
let b = Number(prompt("Informe o lado B do triângulo: "));
let c = Number(prompt("Informe o lado C do triângulo: "));

if (a > 0 && b > 0 && c > 0) {
    if (a < b + c && b < a + c && c < a + b) {
        if (a === b && b === c) {
            console.log("Triângulo equilátero");
        } else if (a !== b && b !== c && a !== c) {
            console.log("Triângulo escaleno");
        } else {
            console.log("Triângulo isósceles");
        }
    } else {
        console.log("Não é um triângulo.");
    }
} else {
    console.log("Valores inválidos. Os lados devem ser maiores que zero.");
}
