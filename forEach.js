//Funcionamento do forEach de acorco com as especificações da ES6
'use strict'

let inteiros = [2,4,6,8,10]

inteiros.forEach((atual) => {
    console.log(atual * atual)
})

//O forEach recebe como parâmetro um callback juntamente com o valor atual da iteração. 
//Assim sendo podemos trabalhar com cada valor do array individualmente. Podemos também passar 
//diretamente uma função para o callback, em vez de escrever diretamente no parâmetro. 
const elevaQuadrado = (valor) => {
     console.log(valor * valor)	
}

inteiros.forEach(elevaQuadrado)

//Atenção! Caso um elemento for adicionado no array durante a iteração do forEach, 
//o mesmo não será executado no loop, apesar de passar fazer parte do array iterado, ex:
inteiros.forEach((atual) => {
     inteiros.push(12)
     console.log(atual)		
})

//Note que o valor 12 não foi exibido na iteração, apesar de estar no array. Isso acontece porque os valores
//processados pelo forEach são apenas os definidos antes da chamada da função, não é feito vefificação
//novos valores adicionados. 

