'use strict';

//Na versão ES6, é possível adicionar valores padrões para funções, caso o parâmetro seja omitido. 

const apresenta = (nome = 'Joãozinho', sobrenome = 'Ribeiro') => {
    console.log(`Olá! meu nome é ${nome} ${sobrenome}`);
};

apresenta();
apresenta('Carlos', 'Faria');
apresenta('Roberto');

//Também é possível atribuir o valor de um parâmetro como default para outro parâmetro vizinho
const multiplica = (a, b = a) => a * b;

//O segundo parâmetro foi omitindo, assim sendo, o valor 2 também foi passado para a variável b
console.log(multiplica(2));

console.log(multiplica(2,4));

//É possível referenciar dentro da função variáveis que estejam fora do escopo de criação da função
const v = 'de fora';
function imprime(x = v){
  const v = 'dentro';
  console.log(x);
}


//Passando argumentos infinitos com a utilização de arguments
const montaConsulta = () => {
  
  const tabela = arguments[0]; //recebe o primeiro argumento passado no método
  const qtaArgs = arguments.length;
  let cols = '';

  if(qtaArgs > 1) {

    for(let index = 1; index < qtaArgs; index++){
      cols += `${arguments[index]}, `;
    }

    cols = cols.substring(0, cols.length - 2);

  } else {
    cols = '*'; 
  }

  return `select ${cols} from ${tabela}`;

}

console.log(montaConsulta('clientes', 'nome', 'escolaridade', 'profissão'));




