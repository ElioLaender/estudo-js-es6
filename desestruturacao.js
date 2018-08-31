'use strict';

/*
No ES6, é possível "desestruturar" um objeto ou array, de forma a conseguir declarar variáveis, ou até mesmo passar parâmetros para funções diretamente,
sem necessidade de iterar peloa atributos. 
*/

const Pessoa = {
  sobrenome: 'Alberto'
};

//Criamos a variável apelido, a partir do atributo nome do objeto Pessoa. Sintaze {nome_atributo:nome_da_variavel} = Objeto
const {sobrenome:apelido} = Pessoa;
console.log(apelido); //Alberto

//Passando valores de forma desestruturadas para um função
const suco = {
  sabor: 'uva',
  quantidade: '500ml'
}

function descreveSuco({sabor, quantidade}) {
  return `Este suco é de sabor ${sabor} e possui ${quantidade}`;
}

//note que foi passado apenas o objeto, mas os parâmetros já são a partir do objeto desestruturado.
console.log(descreveSuco(suco)); // Este suco é de sabor uva e possui 500ml


//Desestruturamento de arrays. As ',' não necessárias para "pular" as posições. 
const [cor1,,,cor2] = ['azul', 'cinza', 'branco', 'preto'];
console.log(cor1); // azul
console.log(cor2); // preto




//Dessa forma, conseguimos desestruturar o objeto rotas que possui o atributo rapidas com um array
const rotas = {
  rapidas: ['Rodovia', 'Estrada X', 'Estrada Y']
};

//declaramos uma variável const chamada 'rapida' a partir do objeto rotas e do array do atributo rapidas. utilizamos as virgulas para pular as posições do array.
const { rapidas:[,,rapida] } = rotas;
console.log(rapida); // Estrada Y

