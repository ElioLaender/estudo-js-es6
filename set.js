'use strict';

/*
 *Segue um exemplo de um objeto chamado Set, que tem por função receber valores e garantir que esses valores não se repitam 
 durante a execução do script. 
*/

/*
 
function Set(){

let array = [];
this.add = (valor) =>  {
  if(array.indexOf(valor) === -1){
    array.push(valor);
  }
},

this.mostrarValores = () => {
  console.log(array);
}

};

let set = new Set();
set.add(2);
set.add(1);
set.add(2);

set.mostrarValores();

*/

/*
 A boa notícia é que no ES6 temos a implementação nativa do método Set, que cuida de fazer esse controle. É composta por uma estrutura de dados que mantem a ordem de inserção dos elementos e cuida para que não exista valores repetidos dentro da estrutura. 
*/

//Segue o código anterior, porém de forma nativa
let setNativo = new Set();

setNativo.add(2);
setNativo.add(1);
setNativo.add(2);

//a estrutura do Set geta um iterável, capaz de ser itrado pelo for..of, que faz uma chamada o iterador do iteravel passado.

for (const valor of setNativo) {
 console.log(valor); // 2, 1
}

//O construtor do Set já permite que seja passado um array com os valores como parâmetro, elimiando algumas linhas de código. 
let listaValores = new Set([2,1,2,]);
for(let atual of listaValores){
  console.log(atual);
}

/* O que é mais interessante no Set, é que ele possui praticamente os mesmos métodos parecidos com o map:
 * add('valor') - adiciona um valor (apenas o valor, sem key => value)
 * delete('valor') - deleta a posição com valor especificado
 * clear()- deleta todos valores
 * has('valor') - verifica se valor existe na estrutura
 * .size - retorna a quantidade de posições
 */
