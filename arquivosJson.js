var fs = require("fs");
var nomeArquivo="carros.json"
var carros=["Gols","Palio","Uno","Celta"];
var concessionaria = {
    nome: "Concessionaria XYZ",
    carros
}
fs.writeFile(nomeArquivo,JSON.stringify(concessionaria),function(err){//strinify converte para string para não ficar o object
    if(err){
        console.log(err);
    }else{
        fs.readFile(nomeArquivo,"utf-8", function(err,data){
            if(err){
                console.log(err)
            }else{
               var obj = JSON.parse(data);//.parse recebe um texto e retorna um objeto
               obj.carros.push("HRV");
               fs.writeFile(nomeArquivo,JSON.stringify(obj), function (err){
                if(err){
                    console.log(err)
                }
               });
            }
        })
    }
});