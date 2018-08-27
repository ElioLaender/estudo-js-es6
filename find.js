'use strict'
//Tem por objetivo retornar a primeira ocorrência de um array que atenda uma comparação, desconsiderando
//o restante das iterações. 

let alunos = [
  {nome: 'joão'},
  {nome: 'josé'},
  {nome: 'maria'}	
]

let aluno = alunos.find((atual) => {
  return atual.nome === 'josé'
})

console.log(aluno)
