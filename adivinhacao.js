//1-gerar um numero aleatorio entre 1 e 100
//2- Inicializar o numero de tentativas como 10
//3-Pedir ao usuario para tentar adivinharr um numero
//4-Decrementar o numero de tentativas
//5- verificar se a tentativa esta correta
//6-Se estiver correta: Informar que acertou o numero; encerrar o jogo
//7-Se estiver incorreta e acabaram as tentativas: Informar que não venceu e encerrar o jogo
//8-Se estiver incorreta, e ainda existirem tentativas:
/*-informar se a tentativa é maior ou menor do que o numero sorteado
-Pedir outra tentativa para o jogador*/

var readline = require ("readline");
var rl = readline.createInterface({
    input:process.stdin,//entrada dor programa seja a linha de comando
    output:process.stdout//saída
})
var numeroAleatorio= Math.round(Math.random()*100);//math.round faz o arredondamento;math.randon retorna um pseudonumero entre 0 e 1
if(numeroAleatorio===0){
    numeroAleatorio=1;
}
var numeroTentativas= 10;
//console.log(numeroAleatorio)
pergunta();
function pergunta(){
    rl.question("Digite um número", function(numero){
        console.log(typeof(numero));
        numero=parseInt(numero)
        numeroTentativas--;
        if(numero===numeroAleatorio){
            console.log("Parabéns você acertou o número!")
            rl.close()
        }else if(numeroTentativas===0){
            console.log("Que pena. Você não descobriu o numero em 10 tentativas!")
            rl.close();
        }else if (numero > numeroAleatorio){
            console.log("Número errado, você ainda tem" + numeroTentativas + "tentativa" +
            "O número informado é maior do que o sorteado.");
            pergunta();
        }else {
            console.log("Número errado, você ainda tem" + numeroTentativas + "tentativa" +
            "O número informado é menor do que o sorteado.");
            pergunta();
        }
    
    })
    

}
