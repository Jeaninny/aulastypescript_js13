import readlinesync = require("readline-sync");

const numeros: Set<number> = new Set<number>();

for (let indice = 0; indice < 10; indice++){
    numeros.add(readlinesync.questionInt("Digite um numero: "));
}
console.log("Listar dados do Set: ");
for (let numero of numeros) {
    console.log(numero);
}