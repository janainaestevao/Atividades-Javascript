var soma = 4 + 2;
var subtracao = 5 - 3;
var multiplicacao = 5 * 4;
var divisao = 20 / 4;
var resto = 20 % 3;

console.log("soma" + soma);
console.log("subtracao" + subtracao);
console.log("multiplicacao" + multiplicacao);
console.log("divisao" + divisao);
console.log("resto" + resto);

var num1 = 10;
var num2 = 50;
var resultado = (num1 + num2) / (8 + 2);
console.log("precedência" + resultado);

var incremento = 1;
incremento= incremento + 1;
incremento++;
console.log("incremento: "  +  incremento);

var atribuicaoComAdicao = 5;
atribuicaoComAdicao += 6; // o mesmo que a= a + 6
console.log("atribuição com adição: " + atribuicaoComAdicao);

var decremento = 5;
decremento = decremento -1;
decremento--;
console.log("decremento: " + decremento);

var atribuicaoComSubtracao = 10;
// o mesmo que atribuicaoComSubtracao = atribuicaoComSubtracao - 4;
atribuicaoComSubtracao -= 4; 
console.log("atribuição com subtração: " + atribuicaoComSubtracao);

var atribuicaoComMultiplicacao = 4;
// o mesmo que atribuicaoComMultiplicacao = atribuicaoComMultiplicacao * 5;
atribuicaoComMultiplicacao *= 5;
console.log("atribuição com multiplicação: " + atribuicaoComMultiplicacao)

var atribuicaoComDivisao=20;
// o mesmo que atribuicaoComDivisao = atribuicaoComDivisao / 4;
atribuicaoComDivisao /= 4;
console.log("atribuição com divisão: " + atribuicaoComDivisao);

var a = 4;
var b = 3;
var adicaoIncrementoPosterior= a + b++
console.log("adição incremento posterior: " + adicaoIncrementoPosterior);

var adicaoIncrementoAnterior= a + ++b;  
console.log("adição incremento anterior: "+ adicaoIncrementoAnterior  )

var c=5;
var d=6;
var subtracaoDecrementoPosterior= c + d--;
console.log("subtração decremento posterior: " + subtracaoDecrementoPosterior);

var subtracaoDecrementoAnterior= c + --d;
console.log("subtração decremento anterior: " + subtracaoDecrementoAnterior);
