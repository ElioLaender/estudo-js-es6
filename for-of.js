'use strict'
//o laço for..of funciona se e somente se o valor passado por argumento for um iteravel(array, Set, Map). Funciona de forma parecida com o forEach, porém não recebe um callback por parâmetro.

let numeros = [1,2,3,4,5];

//O primeiro parâmetro deve ser a variável que receberá o valor atual da iteração, já a segunda deve ser o iterável. 
for(let atual of numeros) {
  console.log(atual);
}

//O que acontece por baxo dos panos do for..of, é que ele acessa o iterador do iterável passado por parâmetro, caso não for passado um valor que seja iterável, teremos um erro. Ex: Iremos criar um objeto e tenrar iterar pelo mesmo.

let perfilDoFacebook = {
  nome: 'Carlos',
  idade: 22
};

//Retorno: TypeError: perfilDoFacebook is not iterable
for (let atual of perfilDoFacebook){
  console.log(atual);	
}


