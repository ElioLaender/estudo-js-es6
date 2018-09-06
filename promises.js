'use strict';

/*
  Quando um promisse é criada, ela deve receber uma função de callback, que recebe dois parâmetros, sendo
  resolve e reject. Assim que o calback é executado, devemos retornar o valor através do resolve(), ou fazer uma
  chamada ao reject() caso algum erro ocorra na execução da promisse. Cada .then() encadeada na promisse, receberá
  o retorno do .then anterior a este. Segue abaixo um exemplo. 
*/

let myPromise = new Promise((resolve, reject) =>{
  
  setTimeout(() => {
    resolve(500);
  },2000);

});

myPromise
.then(value => {
  console.log(`Primary value: ${value}`);
  return 100;
})
.then(value => {
  console.log(`Second value: ${value}`);
  //É possível encadear promisses conforme necessidade
  return new Promise((resolve, reject) => {
	  setTimeout(() => {
	     resolve(120);
	  }, 2000);
  });
})
.then(value => {
  console.log(`Third value ${value}`);
});

//Caso ncessáiro retornar uma promise, sem necessidade de implementar uma completamente, é possível utilizar o método estático resolve(), que já retorna
//o valor como uma promisse. 

let promise2 = Promise.resolve(77);

//Termos também o método race(), este método recebe uma lista de promises e executa o .then assim que a primeira promise for resolvida ou retornar um erro. 

let myPromise1 = new Promise((resolve, reject) =>{ 
    setTimeout(() => {
      resolve(370);
    },2000);
 });

let myPromise2 = Promise.resolve(747);

//Vamos utilizar o promise race, que retorna a primeira promisse do encadeamento. 
Promise.race([myPromise1, myPromise2]).then((value) => {
  console.log(value);
});

//Ao executar, notamos que myPromisse2 retorna primeiro. Isso já era de se esperar, pois myPromise1 possui um setTimeout

//Temos também o all() que é parecidac om o .race(), porém só retorna quando dotas promisses forem executadas ou quando identificar algum erro. 
