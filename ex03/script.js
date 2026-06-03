let idades = [];

for (let i = 0; i < 9; i++) {
    let nome = prompt(`Digite o nome da ${i + 1}ª pessoa:`);
    let idade = parseInt(prompt(`Digite a idade da ${i + 1}ª pessoa:`));
    nomes.push(nome);
    idades.push(idade);
}
let menoresDeIdade = [];
for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
        menoresDeIdade.push(`${nomes[i]} - ${idades[i]} anos`);
    }
}
if (menoresDeIdade.length > 0) {
    alert("Pessoas menores de idade:\n\n" + menoresDeIdade.join("\n"));
} else {
    alert("Não há pessoas menores de idade.");
}
