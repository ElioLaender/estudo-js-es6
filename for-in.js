'use strict';

//O for in, consegue iterar pelos nomes de atributos de objetos, ao contrário do for of, que percorre apenas estruturas iteráveis. 

let perfilFacebook = {
    nome:'ÉLio',
    idade: 28	
}

//Percorre pelos nomes da propriedade, em vez do atributo diretamente.
for(let propriedade in perfilFacebook){
    let info = perfilFacebook[propriedade];
    console.log(info);	
}


