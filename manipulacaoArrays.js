var carros = ["Gol", "Palio", "Uno", "Sandero"];
//console.log(carros[carros.length-1]); remove do array
var carro = carros.pop();//pop remove o ultimo elemento do array e retorna o elemento removido
/*console.log(carro);
    console.log(carros);*/
//push insere o elemento no fim do array e retorna seu novo tamanho
var x = carros.push("Ford Ka");
/*console.log(carros);
console.log(x);*/

//shift remove o primeiro elemento do array, retorna ele e atualiza os outros indice
carro=carros.shift();
/*console.log(carro);
console.log(carros);*/

//unshift adiciona um elemento no inicio do array, atualiza os outros indices e 
//retorna o novo tamanho do array
x=carros.unshift("Onix");
/*console.log(carros);
console.log(x);*/
//atualiza o elemento do indice informado
carros[2]="Novo Uno";
//console.log(carros);
//remove o elemento no indice informado, deixando undefined no lugar
//delete carros[2];
//console.log(carros);
/*splice
primeiro parametro:posição inicial
segundo parametro:quantos elementos serao removidos a partir da posição inicial
terceiro e demais parametros:elementos que serão inseridos a partir da posição inicial

*/
carros.splice(2,1,"HRV","Creta","HB 20");
console.log(carros);
carros.splice(2,1);// removendo elementos de dentro do array HRV
//console.log(carros);

var carrosAntigos=["Brasilia","Monza","Fusca"];
var carrosAntigos2=["Corcel","Variante","Opala"];
var todosOsCarros= carros.concat(carrosAntigos, carrosAntigos2);
console.log(todosOsCarros);

/* slice cria um novo array sem alterar o array original
primeiro parametro:posição inicial
segundo parametro:(opcional): posição final (não incluso)
*/

var novoArray=todosOsCarros.slice(1);
console.log(todosOsCarros)
console.log(novoArray)

var novoArray2=todosOsCarros.slice(2, 5);
console.log(novoArray2);