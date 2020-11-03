var a = 50;
var b = 40;
if (a > b){
    //condição a ser executada caso seja verdadeiro
    console.log("a maior do que b");
}else if (b< a ){
    // senão, executa codigo abaixo
    console.log("b maior do que a");
}else {
    console.log("a e b são iguais");
}

if( a > b){
    console.log("executar somente se a > b");
}
console.log("sempre executar")

var c = 30;
var d = 30;
if(c>=d){
    console.log("c maior ou igual que d");
}
if(d <= c){
    console.log("d menor ou igual que c ")
}

var e = 10;
var f = 10;
if(e ===f){
    console.log("e é igual a f");
}

var g =10;
var h = 11;
if(g != h){
    console.log("g é diferente de h");
}

var i = 4;
var j = 3;
var k = 5;
var l = 5;
if((i > j) && (l > k)){
    console.log("i maior do que j");
}
if((i === j) || (k === l)){
    console.log("um dos dois eram válidos");
    if(k === 5){
        console.log("k igual a 5");
    }else {
        if(k === 4){

        }else if (k === 3){

        }
    }
}
console.log(!(1>2))
if(!(1>2)){
    console.log("execute")
}
var fruta="abacaxi";
var valor = 0;
if(fruta === "banana"){
    valor=2;
}else if(fruta === "maca"){
    valor = 3;
}else if(fruta === "abacaxi"){
    valor = 4;
}else if(fruta=== "melao"){
    valor= 5;
}else if(fruta === "mamao"){
    valor= 5.50
}
//console.log("valor: " + valor)

switch(fruta){
    case "banana":
    valor= 2;
    break;
    case "maca":
    valor= 3;
    break;
    case "abacaxi":
        valor= 4;
    break;
    case "melao":
        valor = 5;
        break;
     case "mamao":
        valor = 5.50
        break;
        default:
        valor = 10;

}
console.log("valor: " + valor)

var x = 3;
var y = 2;
var resultado=""
if(x>y){
    resultado = "x maior que y";
}else{
    resultado = "senão"
}
console.log(resultado)
//operador ternário
resultado = x>y? "x maior que y" : "senao"; 
console.log(resultado)