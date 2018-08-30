'use strict';

//O operador spread é utilizado quando desejamos imprimir todos elementos de um array, sem necessidade de criar uma iteração no array.
//O operador Spread torna um array (e outros objetos ireraveis) em itens individuais.
const inteiros = [1,2,3,4,5,6,7,8,9,10];
console.log(...inteiros);

//mesclando dois array em um com o método concat.
const listaImpares = [1,3,5,7,9];
const listaPares = [2,4,6,8];
const listaNumeros = listaImpares.concat(listaPares);

console.log(...listaNumeros.sort());
console.log(`Quantidade de elementos: ${listaNumeros.length}`);

//Com o operador spread, podemos concatenar array de forma mais simples do que utilizar o concat
const cores = ['amarelo', 'vermelho', 'azul'];
const numeros = [1,2,3,4,5];
const moveis = ['mesa', 'cadeira'];

//concatena arrays, mesmo os numericos.
const coisas = [...cores, ...numeros, ...moveis];

console.log(...coisas);

//Tamém é possível utilizar o spread para adicionarmos elementos em um dado objeto, por exemplo
const url = {
  url: 'globo.com',
  descricao: 'Portal de notícias'	
}

let listaUrls = [
  {url: 'gmail.com', descricao: 'Site de email'},
  {url: 'yahoo.com', descricao: 'Portal de pesquisas'}

];
//Sobrecrevendo listaUrls, mantendo o que tinha e adicionando mais um registro.
listaUrls = [...listaUrls, url];

console.log(...listaUrls);

//O operador Rest coleta os itens passados por parâmetros e coloca-os em um array. Abaixo temos um exemplo da utilizaçao dos dois em conjunto
function qtdVogaisNaoAcentuadas(...palavras) {
  let qtdVogais = 0;
  for(let palavra of palavras){
      let palavraLowerCase = palavra.toLowerCase();
      const letras = [... palavraLowerCase];
      for(let letra of letras) {
        if("aeiou".indexOf(letra) !== -1) {
          qtdVogais++;	      
        }
    }
  }
  return qtdVogais;
}

console.log(qtdVogaisNaoAcentuadas('es6', 'aeiou'));


