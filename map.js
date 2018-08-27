//O map também recebe um callback por parâmetro e executa cada elemento do array em questão dentro da função
//de callback, a diferença do foreach, é que o map retorna um array de valores retornados pelo callback. 
'use strict'

let inteiros = [1,2,3]
let dobro = inteiros.map((atual) => {
   return atual * 2
})

console.log(inteiros)
console.log(dobro)
