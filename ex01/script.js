
let nomes = [];

for (let i = 0; i < 7; i++) {
    let nome = prompt(`Digite o ${i + 1}º nome:`);
    nomes.push(nome);
}

nomes.reverse();

let listagemFinal = nomes.join("\n");

// Mostra o resultado final em um único alert
alert("Listagem dos nomes na ordem inversa\n\n" + listagemFinal);