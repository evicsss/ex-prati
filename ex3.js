const prompt = require('prompt-sync')();

let n = parseFloat(prompt("Digite sua nota: "));

if (n > 0 && n < 6) {
    console.log("Você está de recuperação.");
    let n2 = parseFloat(prompt("Digite sua nota da recuperação: "));

    if (n2 >= 6 && n2 <= 10) {
        console.log("Você foi aprovado!");
    } else if (n2 > 0 && n2 < 6) {
        console.log("Você foi reprovado!");
    } else {
        console.log("Nota da recuperação inválida.");
    }
} else if (n >= 6 && n <= 10) {
    console.log("Você foi aprovado!");
} else {
    console.log("Nota inválida.");
}
