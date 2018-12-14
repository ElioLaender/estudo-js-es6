'use strict';

//no JS é possível declarar funções de três formas distintas, sendopor meio de declaração de função, utilizando expressão e invocan    do o construtor de function. 

//Declaração de função
function apagaLuz(){
     //codigo...
}
 
//Utilizando expressão
const partidaMotor = function(){
 //codigo...
}       

//Criando função pelo construtor de funções. Muito pouco utilizado
const soma = new Function('valor1','valor2', 'console.log(valor1 + valor2)');
soma(10,5);

//A partir da ES6, foi criado um novo tipo de declaração, chamada de Arrow Functions

//Caso a function receber apenas um parâmetro, não se faz necessário parenteses antes da fat arrow.
const desligaMotor = idMotor => `O motor ${idMotor} foi desligado.`;
console.log(desligaMotor(6));

//Caso o retorno for dado em apenas um linha, é possível omitir também o 'return' e as chaves '{}'. Sendo assim menos verbosas. 

//Possuem contextos de execução diferentes. 
/*
 *
Arrow functions, ao contrário das functions convencionais, não possui contexto de declaração restrito ao escopo da função, vamos ver um exemplo em que antes era necessário criar uma variável para receber o contexto de 'this' para acessar variáveis de um escopo superior ao contexto da função. 
 */

const equipe = {
  nome: 'Guerreiros Z',
  membros: ['Goku', 'Kuririn', 'Vegeta'],
  membrosEquipe: function() {
    const that = this;
    this.membros.forEach(function(membro) {
      //note que o callback já está um nivel de escopo abaixo da classe equipe, o que torna seu escopo inacessível diretamente.	    
      console.log(`${membro} é da equipe ${that.nome}`);
    });
  }

}

equipe.membrosEquipe();

//Vejamos agora o exemplo utilizando arrowFunction, onde o escopo de acesso não fica restrito apenas ao escopo da função mas sim do objeto como um todo
const artesMarciais = {
  nome: 'Conjunto de artes marciais agarradas',
  artes: ['jiu-jitsu', 'judo', 'wrestling'],
  exibeArtes: function(){
     this.artes.forEach(arte => {
       console.log(`${arte} faz parte do ${this.nome}`);     	     
     });	  
  }
}

artesMarciais.exibeArtes();

/*
Arrow functions conseguem fazer associação (bind) de forma automática, assim sendo, conseguem trazer o this para dentro do seu próprio escopo.
*/

const equipe2 = {
  nome: 'Guerreiros Z',
  membros: ['Goku', 'Kuririn', 'Vegeta'],
  membrosDaEquipe: function() {
    this.membros.forEach(function(membro) {
      console.log(`${membro} é da equipe ${this.nome}`);
    }.bind(this)); //Neste exemplo foi utilizado o método bind
  }
}

equipe2.membrosDaEquipe();

/*
- Instalar node.js (Já vem com npm)
- instalar git.
- Instalar typescript -> npm install -g typescript
- Instalar angular-cli -> npm install -g angular-cli
- Criar projeto -> ng new nomeProjeto
- Acessar projeto cd nomeProjeto
- Subir aplicação -> ng serve - depois localhost:4200
- criar componente -> ng g c nome-componente
*/






