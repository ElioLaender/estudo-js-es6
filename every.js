'use strict'

//O every percorre todas posições do array fazendo uma determinada comparação, percorre enquanto for verdadeiro, sendo todos verdadeiros, percorre todos e retorna true, caso for falso, quebra o laço e retorna falso. 

let alunos = [
  {nome: 'joão', idade: 18},
  {nome: 'maria', idade: 20},
  {nome: 'pedro', idade: 24}	
]

let todosAlunosDeMaior = alunos.every((atual) => {
  return atual.idade >= 18
})

console.log(todosAlunosDeMaior)


