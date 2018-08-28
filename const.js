'use strict';
/*
 Declaração de constantes com const:

Quando temos um estrutura que será imutável durante a execução de um script, servindo de exemplo um objeto que armazenará dados deuma pessoa, podemos declarar uma variável como sendo const, dessa forma, qualquer tentativa de alterar o valor da estrutura em si,irá ocasionar o seguinte typeError: Assignment to constant variable. Mas isso não quer dizer que a estrutura da variável é imutável. Essa afirmação fica mais avidente de acordo com o exemplo:
*/
const pessoa = {nome: 'Eu'};

pessoa.idade = 28;
console.log(pessoa);

pessoa.idade = 30;
console.log(pessoa);

/*
Note que definimos pessoa como const, porém isso não impede a manipulação do seu conteúdo, mas impede que seu tipo seja alterado diretamente. Vamos tentar modificar o valor de pessoa, que tualmente armazena um objeto. 
*/

pessoa = 'Olá!';
//retorno: TypeError: Assignment to constant variable.

