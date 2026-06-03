let numeros = [];
let soma = 0;

for (let i = 0; i < 8; i++) {
    let num = parseFloat(prompt("Digite um número:"));
    numeros.push(num);
    soma = soma + num;
}

let media = soma / 8;
alert("A média é: " + media);

let acimaDaMedia = [];
for (let i = 0; i < 8; i++) {
    if (numeros[i] > media) {
        acimaDaMedia.push(numeros[i]);
    }
}

alert("Números acima da média:\n" + acimaDaMedia.join("\n"));