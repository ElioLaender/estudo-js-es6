'use strict';

/*
Mapas se assemelham muito a objetos, pois seus elementos também são compostos por cheve => valor.
O que diferencia um mapa de um objeto tradicional a partir da ES6, é que um objeto do tipo mapa vem acompanhado com 
uma séria de funções para auxiliar no uso da mesma.
Essa nova estrutura nos permite:
Adicionarelementos pelo par (chave => valor)
remover elementos pela chave
Acessar elementos dada uma chave
Pesquisar se um elemento existe na estrutura do map a partir da verificação da sua chave
verifiicar argumentos, tais como a quantidade de elementos existentes no mapa, por exemplo. 
*/

let mapa = new Map();

//definindo valor ao map a partir do set
mapa.set('nome', 'Élio Laender');
mapa.set('idade', 28);

//recuperando valor com get
console.log('Nome: ' + mapa.get('nome') + '\nIdade: ' + mapa.get('idade'));

//verifica a quantidade de itens no mapa
console.log('Quantidade de itens: ' + mapa.size);

//verifica se determinado item existe no mapa
console.log('Existe o campo nome? ' + (mapa.has('nome') ? 'Sim' : 'Não'));
console.log('Existe o campo cpf? ' + (mapa.has('cpf') ? 'Sim' : 'Não'));

//Exclusão de um campo
mapa.delete('nome');
console.log('Existe o campo nome? ' + (mapa.has('nome') ? 'Sim' : 'Não'));

//deletando todos registros
mapa.clear();
console.log('quantidades de campos no mapa: ' + mapa.size);

//O map é um objeto iterável, ou seja, podemos utilizar iteradores nos mesmos
let pessoa = new Map();
pessoa.set('nome', 'Élio');
pessoa.set('idade', 28);
pessoa.set('cpf', '092.458.437-85');

//Iterando pelos nomes dos atributos do mapa com o for..of(Utiliza o iterador do itarável passado por parâmetro)
for(let chave of pessoa.keys()){
  //foi passado apenas as chaves do objeto mapa por parâmetro.	
  console.log(chave);
}

//Passando os valores dos atributos
for(let valor of pessoa.values()){
  console.log(valor);
}

//Passando chave e valor por parâmetro
for(let atributo of pessoa.entries()){
  console.log(atributo);
}

/*
Por convenção, Map é mais utilizado quando se deseja trabalhar com coleções, já objetos em geral devem ser utilizados como registros, compostos por campos e métodos. Em situações onde é necessário trabalhar com chaves adicionadas dinamicamente de acordo com a execução do script, se necessário criação de chaves que não sejam strings, adição e remoção de chaves com frequência ou até mesmo iterar pelas chaves e valores, o mais indicado é trabalhar com Map. Em casos de termos um número fixo de chaves que serão trabalhadas individualmente, podemos utilizar um objeto convencional.
*/



