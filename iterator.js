'use strict'
/*
 Iteradores e iteraveis:

Iteraveis, são estruturas de dados passíveis de serem analisadas por posições. Servindo como exemplo: arryas, strings, Maps, Sets.

Iteradores, são funções capazes de trabalhar iterando pelos iteraveis, podendo acessar os valores em questão e ao mesmo tempo armazenar o status atual do loop, retornando false durante o processo e true quando o iteravel for totalmente percorrido. 
*/

let bruxos = ['Merlin', 'Gandafalf', 'Rasputin'];

//criando o objeto iterador a partir do iteravel bruxos, neste caso um array
let iteradorBruxos = bruxos[Synbol.iterator]();

//O método net retorna um objeto com {value: 'Merlin', done: false}
//sendo que a cada chamada ele passa para a próxima posição. 
iteradorBruxos.next();
	














