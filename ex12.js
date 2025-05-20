const prompt = require('prompt-sync')();

let n = Number(prompt("Digite um número para receber a tabuada: "));

for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}
