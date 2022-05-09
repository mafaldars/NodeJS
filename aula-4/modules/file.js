// interagir com FILESISTEM

const fs = require('fs/promises'); // obrigatório usar fs/promises

const path = require('path');

const filePath = path.join(__dirname, 'data', 'file.txt');

fs.open(filePath)
    // .then(file => console.log(file));
    .then(file => file.readFile())
    .then(data => console.log(data.toString()))
    .catch(err => console.log(err.message));
     // caso o ficheiro não exista, quero saber que erro ocorreu 


    // BUFFER é informação que está em memória e fica à espera de ser processada, senão for processada a info é perdida 
    // BUFFER é conteúdo em memória à espera de ser processado
    /*
    Um buffer é um espaço de memória (tipicamente RAM) que armazena dados binários.
    No Node.js, podemos acessar esses espaços de memória com a classe Buffer integrada.
    Os buffers armazenam uma sequência de números inteiros, de maneira similar às matrizes em JavaScript.
    */


     fs.readFile(filePath)
        .then( data => data.toString())
        .then(content => console.log(content));

     fs.appendFile(filePath, '\nAnother line in my file')
     .then(() => console.log('Complete'));
