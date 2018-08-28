'use strict';
/*
Atualmente, o let é a nova forma de se declarar uma variável, pois ela gerencia as variáveis de uma forma mais restrita,
facilitando o controle das mesmas. Servindo de exemplo uma variável de mesmo nome que é declarada duas vezes dentro de um mesmo escopo. Com a declaração utilizando 'var', o interpretador julga que se trata da mesma variável e sobrescreve a mesma. Já com a declaração de let, isso não ocorre, pois teriamos erro de sintaxe, ex:
*/

var id = 1;
var id = 2;

console.log(id); //retorno: 2

//mesmo que a redeclaração seja como const, com let não será permitido repetir o nome dentro do escopo. 
//let idLet = 1;
//const idLet = 1;
//retorno: SyntaxError: Identifier 'id' has already been declared


//Diferença entre var e let. Para notarmos essa diferença, vamos a um exemplo de escopo.

/*

var mensagen = 'ola!';
{
  var mensagem = 'Oi!';
}

console.log(mensagem);//retorno: 2

*/

/*
No ES5, o escopo de variáveis são definidos por funções, não apenas por bloco de código, conforme tentamos simular no exemplo acima. Assim sendo, para que o escopo de variáveis funciona conforma esperado, é necessário a definição de uma função para definirmos o escopo. 
*/

var mensagem = 'Olá!';

function mensagem() {
  var mensagem = 'oi!';	
}

console.log(mensagem);//retorno: Olá.

/*
 note que para o caso de termos outros blocos de código que não uma função, por exemplo um for ou while. Teriamos a mesma redeclraração que vimos no exemplo anterior a esse. Com o ES6 e a utilização da declaração com let, podemos garantir o comportamento de escopo por bloco, não apenas por função. Vamos fazer um exemplo exibindo o escopo por bloco.  
*/

const arrayVar = [];
for(var i = 1; i < 5; i++){
  arrayVar.push(() => {
    console.log(i);    	  
  });	
}

const arrayLet = [];
for(let i = 1; i < 5; i++){
  arrayLet.push(() => {
    console.log(i);    	  
  });
}

//Esse resultado se dá, porque a cada iteração, o valor da variável é atualizado por referência, ou seja, em todos
//locais em que a mesma se encontra, o valor é alterado. 
arrayVar.forEach((funcao) => {
  funcao(); //5,5,5,5,5
});

arrayLet.forEach((funcao) => {
  funcao(); //1,2,3,4,5
});


