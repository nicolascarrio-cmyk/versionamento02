
let vetor1 = [];
let vetor2 = [];

// 1. Preenche o primeiro vetor
for (let i = 0; i < 5; i++) {
    vetor1.push(parseInt(prompt("Vetor 1:")));
}

// 2. Preenche o segundo vetor
for (let i = 0; i < 5; i++) {
    vetor2.push(parseInt(prompt("Vetor 2:")));
}

// 3. Cria a interseção filtrando os números repetidos
let intersecao = vetor1.filter((num, i) => vetor2.includes(num) && vetor1.indexOf(num) === i);

// 4. Mostra o resultado
if (intersecao.length > 0) {
    alert("Elementos em comum:\n" + intersecao.join("\n"));
} else {
    alert("Não há elementos em comum.");
}
