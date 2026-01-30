import readlinesync = require("readline-sync");

const numeros: Array<number> = new Array<number>();
//como array é tipo, eu preciso definir o subtipo dele

//inserir numero no array
numeros.push(readlinesync.questionInt("Digite um primeiro numero: "));
numeros.push(readlinesync.questionInt("Digite um segundo numero: "));
numeros.push(readlinesync.questionInt("Digite um terceiro numero: "));
numeros.push(readlinesync.questionInt("Digite um quarto numero: "));
numeros.push(readlinesync.questionInt("Digite um quinto numero: "));

//Para exibir o array
for (let numero of numeros) {
    console.log(numero);
}

//verifica se o elemento existe
console.log("O numero 5 existe? ", numeros.includes(5));

//verifica o indice do elemento
console.log("O indice do numero 7: ", numeros.indexOf(7));

//apagar um elemento do array.
// Preciso passar o indice inicial e
// a partir dele, quantos elementos quero apagar
//por isso, combino com o indexOf() e
// depois o numero de quantos elementos quero apagar
numeros.splice(numeros.indexOf(7), 2);

console.table(numeros);
