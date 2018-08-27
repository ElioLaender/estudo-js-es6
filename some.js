'use strict'
//Some itera por um array verificando se ao menos uma posição do array atende a condição especificada. O array é percorrido enquanto a condição não for atendida, caso não for, itera por todas posições e retorna false. Caso a condição for atendida, é retornado true e o laço é encerrado.

let pesoDasMalas = [12,32,21,29]
let temMalaAcimaDoPeso = pesoDasMalas.some((atual) => {
  return atual > 30
})

console.log(temMalaAcimaDoPeso);


