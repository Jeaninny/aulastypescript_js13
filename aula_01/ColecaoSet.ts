import readlinesync = require("readline-sync");

const cores: Set<string> = new Set<string>();
//declaraçao do set.

//Inserir dados em um Set
cores.add("Azul");
cores.add("Verde");
cores.add("Azul");
cores.add("Vermelho");
cores.add("Amarelo");

console.table(cores);

//Verifica se o elemento existe.
console.log("A cor verde existe? ", cores.has("Verde"));



//Deletar elemento.
cores.delete("Azul");

//Exibir os elementos do set.
for (let cor of cores) {
    console.log(cor);
}



console.table(cores);

