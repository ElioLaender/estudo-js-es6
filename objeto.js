'use strict';
/*
Vamos analisar agora objetos literais, mas antes de aprofundar no mesmo, vamos fazer um exemplo com a criação de um objeto clássico, utilizando o chamada de construtora 'new'.
*/

function Automovel(marca, ano){
  this.marca = marca;
  this.ano = ano;
}

const carro = new Automovel('BMW', 2018);
console.log(`Marca: ${carro.marca} Ano: ${carro.ano}`);

//Neste exemplo, o objeto carro é único, e qualquer alteração ocorre apenas dentro docontexto desse objeto, ao contrário de um objeto literal, que uma vez criado, outras variáveis que receberem o mesmo, receberão seu endereço de memória, onde as alterações realizadas um um objeto irá refletir em todos que compartilham dessa implementação.

//Exemplo de um objeto literal. 
const livro = {
  titulo: 'O mundo de Sofia'
}

console.log(livro.titulo);

//Criando outra variável que irá receber a implementação de livro
const outroLivro = livro;

//atribuindo outro título ao objeto livro
livro.titulo = 'O senhor dos aneis - A sociedade do anel';

//note que a alteração irá refletir nas nas duas variáveis que partilham da mesma implementação.
console.log(outroLivro.titulo);
console.log(livro.titulo);

//Apesar de objetos literais serem estáticos e únicos, são altamente flexiveis, onde podemos adicionar novas propriedades utilizando pondo ou colchetes

const motocicleta = {
  cor: 'Vermelha'
}

//Adicionando atributo dinamicamente
motocicleta.cilindradas = 150;

//Adicionando uma função através do uso de colchetes
motocicleta['partida'] = function () { console.log(`Cor: ${this.cor} Cilindradas: ${this.cilindradas}`); };

motocicleta.partida();


//A partir da ES6 foi adicionado funções para facilitar a manipulação de objetos literais

//Agora é possível declarar atributos e métodos de fora da implementação do objeto literal, podendo adicionar dentro do objeto posteriormente. 

const nome = 'João';
const sobrenome = 'Silveira';
const apresenta = function() {
  console.log(`Olá! Meu nome é ${this.nome} ${this.sobrenome}`);
}
const pessoa = {nome, sobrenome, apresenta};
pessoa.apresenta();

/*
 Também é possível adicionar funções omitindo o 'function' e o sinal de atribuição '='

const pessoa = {
  nome,
  sobrenome,
  seApresentar(){
    console.log(`Olá! Sou a ${this.nome} ${this.sobrenome}`);
  }
};
*/


//ìndices de propriedades computadas. Agora é possível acessar métodos diretamente pelo nome das variáveis, onde o nome da variável representa a chave equivamente ao método e o valor atribuído
//a variável já é passado como parâmetro, ex:
const nomeMetodo = 'invocar';
const objeto = {
  [nomeMetodo](){
    console.log('Executou');
  }
}

//Note que estamos chamando um método atraves da referencia de uma variável. 
objeto[nomeMetodo]();

//
const apelido = "apelido";
const pessoa1 = {
  nome: 'José',
  [apelido]: 'Zé'
}

console.log(pessoa1[apelido]);

