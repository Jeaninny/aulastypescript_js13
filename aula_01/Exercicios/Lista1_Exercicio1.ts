import readlinesync = require("readline-sync");

const cores: Array<string> = new Array<string>();

for (let indice = 0; indice < 5; indice++) {
    cores.push(readlinesync.question("Digite uma cor: "));
}

console.log("Listar todas as cores:");
for (let cor of cores) {
    console.log(cor);
}

console.log("Ordenar as cores: ");
cores.sort();
for (let cor of cores) {
    console.log(cor);
}