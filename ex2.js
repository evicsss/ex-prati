const prompt = require('prompt-sync')();

let idade = parseInt(prompt("Qual a sua idade? "));

if (idade > 0 && idade < 12) {
    console.log("Você é uma criança.");
} else if (idade >= 12 && idade < 18) {
    console.log("Você é um adolescente.");
} else if (idade >= 18 && idade < 60) {
    console.log("Você é um adulto.");
} else if (idade >= 60) {
    console.log("Você é um idoso.");
} else {
    console.log("Idade inválida.");
}
