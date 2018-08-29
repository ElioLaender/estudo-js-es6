'use strict';
//A partir da ES6, podemos utilizar um facilitador para lidar com strings, chamados de template strings. 

//Exemplo com ES5
var nome = 'Élio';
console.log('Bem-vindo ' + nome);

//Exemplo com template string da ES6
const nome2 = 'Ramon';
console.log(`Bem-vindo, ${nome2}`);

//Note que no exemplo anterior estamos usando `` crase para trabalharmos como template string. A partir do momento que utilizamos crase, podemos fazer interpolação de variáveis, em vez da concatenação. 
//Interpolamos com ${variavel}, sendo que também é possível inserir expressões, ex:

const n1 = 1, n2 = 2;
console.log(`${n1} + ${n2} = ${n1 + n2}`);

//Ao utilizar template string, o controle de espaço e quebra de linha é  gerenciado automáticamente. ex:

//Quebra de linha na ES5
console.log('exibindo\numa\npalavra\npor\nlinha\nES5');

//Utilizando template string da ES6
console.log(`
exibindo
uma
palavra
por
linha
ES6`);


//Uma grande vantagem do uso de template-string na prática

/*
let name = 'Elio', idade = 28, endereco = 'Divinópolis - MG';
const html =
`<div>
  <p><b>Nome:</b> ${name}</p>
  <p><b>Idade:</b> ${idade}</p>
  <p><b>Endereço:</b> ${endereco}</p>
 </div>`;

//Exemplo equivalenete com ES5
var div = '<div>';
div += '<p><b>Nome:</b> ' + name + '</p>';
div += '<p><b>Idade:</b> ' + idade + '</p>';
div += '<p><b>Endereço:</b> ' + endereco + '</p>';
div += '</div>';
*/

/*
Template marcado: Supondo que seja necessário mudar parte da string a ser exibida de acordo com alguma
necessidade, por exemplo, colocar masculino ou feninino na frase de acordo com o valor de um parâmetro
ou até mesmo colocar bom dia ou boa tarde de acordo com o horário. Vamos ver como o ES6 facilita esse
trabalho com a utilizaçao de templates marcados. 
*/

/*
const horas = new Date().getHours();
const defineMensagem = (strings, values) => {
  console.log(strings);
  console.log(values);
};

*/

//defineMensagem é uma função que iremos usar para tratar a alteração dinâmica do template
//const mensagem = defineMensagem`Bom dia! São ${horas} horas`;
/*
Saída:
["Bom dia, são ", " horas", raw: Array[2]]
[20]
*/


//Implementação onde é possível realmente fazer o controle da string
const horas = new Date().getHours();
const defineMensagem = (strings, ...values) => {
  const hora = values[1];
	
  if(hora >= 6 && hora <=12){
    values[0] = "Bom dia";
  } else if (hora > 12 && hora <= 18){
    values[0] = "Boa tarde";
  } else {
    values[0] = "Boa noite";
  }
	
  values[0] = `${values[0]}, são`;
  return `${values[0]}${strings[0]}${hora}${strings[2]}`;

};

//defineMensagem recebe a strin
const mensagem = defineMensagem`${''}${horas} horas`;


console.log(mensagem);

