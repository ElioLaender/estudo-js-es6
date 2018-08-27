//Funções de execução imediáta
'use strict'
   
let valor = 10
   
const elevaQuadrado = (() => {
  return valor * valor
})(valor) 

console.log(elevaQuadrado)

