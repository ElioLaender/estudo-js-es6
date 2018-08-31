'use strict';

/*
  Com funções geradoras, é possível interromper a execução da função e em um dado momento retornar a mesma. Vamos ver qual é o critério de parada e retorno de execução da função
*/

//Exemplo simulando um linha de ônibus

function* percorrerLinha477() {
  console.log('Parada no ponto 7');
  yield 'Parada realizada';
  console.log('Parada no ponto 12');
  yield 'Parada realizada';
  console.log('Parada no ponto 15');
  yield 'Parada realizada';
  console.log('Parada no pont 17');
  yield 'Parada realizada';
  console.log('Encerrou');
}

const linha = percorrerLinha477();
//linha.next();
//linha.next();

//A estrutura de repetição for..of é indicada para percorrer objetos iteráveis, a cada iteralção é realizado uma chamada passando o symbol iterator, ou seja, onde é possível que seja
//utilizado o método next() nas propriedades do iteravel. 
for(let parada of linha) {
  console.log(parada);
}

//O asterisco '*' é utilizado para informar que se trata de uma função geradora.
//O yield define o ponto de parada da execução.
//Funções geradoras retorna um objeto iterável, esse objeto oferece o método next(), onde a cada chamada do next, é executado todo código até o yeld, onde a cada chamada de next() a função
//continua a partir do next anterior.






