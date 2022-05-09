/*
GENERATOR FUNCTIONS são funções cujo contexto de execução pode ficar em pausa;
- quando declaramos uma function* (com *) é generator function;
- a função do generator é gerar dados, o objetivo da função é permanecer em execução enquanto houver dados, pode estar em pausa ou não;
- disponível desde o ES6 (2015);
*/


// function* doSomething() {
//     console.log('Start process...');
//     yield;
//     console.log('Resume process...');
//     yield;
//     console.log('Complete!!!');
// }
// YELD serve para parar o contexto de execução da função

// const generator = doSomething();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// o NEXT retorna sempre um objeto com done e true

// while (!generator.next().done) {}

function* sequenceNumber(startNumber = 1, maxNumber = 100) {
    let number = startNumber;

    while (true) {
        number++
        if (number > maxNumber) {
            return number;
        }

        yield number; // yield number++;
    }
}
// number++ é diferente de ++number, ++ no fim incrementa depois e ++ antes adiciona no início 

const sequence = sequenceNumber(99);

console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());

// function* getStockPrice(symbol) {
//     while (true) {
//         // Request data from server
//         yield (Math.random() * 100).toFixed(2);

//         console.log(`Resuming for symbol ${symbol}`);
//     }
// }

// const priceGenerator = getStockPrice('BTC');
// const limitPrice = 15;
// let price = priceGenerator.next().value;

// while (price > limitPrice) {
//     price = priceGenerator.next().value;
//     console.log(`The generator returned ${price}`);
// }

// console.log(`Buying stocks at ${price}`);


// generator concluído dá sempre value: undefined, done: true (no terminal)

const crypto = required('crypto');

console.log(crypto.randomUUID());

// sempre que usamos isto gera um ID único (preferencialmente 16 carateres alfanuméricos hexadecimais)
// recomendado para criar ID's

