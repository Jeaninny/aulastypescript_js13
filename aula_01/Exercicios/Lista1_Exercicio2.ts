import readlinesync = require("readline-sync");

const numeros: Array<number> = new Array<number>(2,5,1,3,4,9,7,8,10,6);

let numeroConferido = readlinesync.questionInt("Digite o numero que voce deseja encontrar: ");

if (numeros.includes(numeroConferido)) {
    console.log(`O numero ${numeroConferido} esta localizado na posicao ${numeros.indexOf(numeroConferido)}`);
} else {
    console.log(`O numero ${numeroConferido} nao foi encontrado!`);
}