'use strict';

//Operador rest, representado por reticências(...) deve ser utilizado apenas no último parâmetro, ou seja, apenas uma vez por função. Ele transforma os parâmetros em array

const somatorioMultiplicacao = (multiplicador, ...valores) => {
  return valores.reduce((soma, valor) => {
    return soma + (valor * multiplicador);
  }, 0);
}

/*
0 + 2 * 1 = 2
2 + 2 * 2 = 6
*/
console.log(somatorioMultiplicacao(2,1,2));

//Mesmo exemplo para montar uma consulta sql
const montaConsulta = (tabela, ...colunas) => {
  let colsConsulta = '';

  if(colunas.length > 0){
    
    colsConsulta = colunas.reduce((colsConsulta, coluna) => {
      return colsConsulta += `${coluna}, `;
    }, '');

    colsConsulta = colsConsulta.substring(0, colsConsulta.length -2);

  } else {
    colsConsulta = '*';
  }

  return `select ${colsConsulta} from ${tabela}`;
}

const consulta = montaConsulta('Pessoas', 'sexo', 'idade', 'peso');
console.log(consulta);


