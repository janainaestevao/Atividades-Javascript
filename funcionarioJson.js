var fs= require("fs");
var conteudoFuncionarios= "funcionarios.json"
fs.readFile(conteudoFuncionarios, "utf-8", function(err, data){
    if(err){
        console.log(err)
    }else{
        var objeto = JSON.parse(data); 
        console.log(conteudoFuncionarios)
         
    }
    function maiorSalario(salario){
            for(var i=0 ; i<salario.lenght;i++){
                if(salario.indexOf(salario)===-1){
                    console.log(nomeFuncionario + salario+"Esse é o funcionario que tem o maior salario");
            } 
        }
    }
    function menorSalario(salario){
        for(var i=0;i<salario.lenght;i++){
            if(salario2.indexOf(salario2)===-1){
                console.log(nomeFuncionario + salario2 + "Esse é o funcionario com o menor salário")
        }
        }
    }
})




