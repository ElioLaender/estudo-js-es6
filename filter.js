 'use strict'

//Com o método filter, funciona como uma espécie de forEach, passando cada elemento de um array
//como parâmetro para um dado callback, onde pode ser realizado uma comparação com o elemento atual
//da iteração e esse valor é retornado caso a comparação realizada com o mesmo for verdadeira. Caso contrário
//será desconsiderado. 

let alunos = [
  {nome:'João', idade: 15},
  {nome:'José', idade: 18},
  {nome:'maria', idade: 20}	
]

let alunosDeMaior = alunos.filter((atual) => {
   return atual.idade >= 18
})

console.log(alunosDeMaior)
