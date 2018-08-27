'use strict'

//O método reduce tem por função trabalhar com valores de um array visando um resultado dado a partir da
//iteração de todos os elementos de um dado array, ou seja, ele realiza uma ação com o valor da iteração atual e
//armazena o histórico de todos os valores retornados a cada iteração. Caso informamos valores numéricos,
//o resultado retornado de cada operação será incrementado ao somatório dos valores retornados. 
//No caso de array, pode ser adicionado novas posições no array de acordo com os valores retornados.
//O método reduce recebe por parâmetro o callback juntamente com o valor que deverá ser retornado inicialmente.

//Exemplo da iteração com valores numéricos:
let numeros = [1,2,3,4,5];
let soma = 0;

//Valor inicial será 0
soma = numeros.reduce((soma, atual) => {
  return soma + atual;
}, 0);

console.log(soma);

//Outro exemplo trabalhando com arrays
let alunos = [
  {nome: 'João', idade: 10},
  {nome: 'José', idade: 20},
  {nome: 'marcos', idade: 30}	
];

//Note que o primeiro argumento do callback é o elemento retornado pelo próprio callback
let nomes = alunos.reduce((arrayNomes, aluno) => {

  if(aluno.idade >= 18)
    arrayNomes.push(aluno.nome);
  return arrayNomes;

}, []);

console.log(nomes);
