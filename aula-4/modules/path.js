const path = require('path');

/*
PATH é um módulo que nos ajuda a converter caminhos;
No file sistem tem funções que nos ajudam a resolver os caminhos, nomeadamente o RESOLVE - converte um caminho negativo num caminho absoluto;
Converte PATH RELATIVO em PATH ABSOLUTO.
*/
 

console.log(path.resolve('./'));

const filePath = path.resolve('./data/file.txt');
console.log(filePath);


console.log(path.basename(filePath, 'txt'));
// BASENAME retorna o nome do ficheiro 

console.log(path.extname(filePath));
// EXTNAME retorna a extensão 

console.log(path.join('foo', 'bar'));
// JOIN une os caminhos - junta-os

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.join('_')); // _ ou - ou :::
// separa os objetos da array com o símbolo que definimos no log

console.log(path.join(__dirname, '..', '..', 'foo', 'bar'));
// dirname é o path total da raiz do pc até onde estamos 