for(var i = 0; i < 10; i++){
    //console.log(i)
}
//do começo para o final do array
var carros = ["Gol", "Palio","Uno","Celta","Sandero"];
for(var i=0;i<carros.length;i++){
    //console.log(carros[i])
}
//do fim para o começo do array
for(var i = carros.length-1;i>=0; i--){
    //console.log(carros[i])
}
var i = 0;
while(i < carros.length){
console.log(carros[i]);
    i++;
}
/*while(true){
    //console.log("Olá")
}*/

var i = 0;
while(i < carros.length){
    console.log(carros[i])
    if(carros[i]==="Palio"){
        //console.log("Encontrei o Palio")
        break;
    }
    i++
}

var numeros=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var i=0;
while(i<numeros.length){
    var num = numeros[i];
    i++;

    if(num % 2 ===0){
       // console.log(num + "Esse número é par");
        continue;// interrompe esse laço
    }
    //console.log(num + " Esse número é ímpar");
}
var j = 30;
do{ //executa pelo menos uma vez
    j++;
    //console.log(j)
}while(j < 10);
//cria-se uma variavel carro
for(var carro of carros){
    console.log(carro);
}
//pega-se um indice
for(var i =0; i < carros.length; i++){ 
    console.log(carros[i]);
}

