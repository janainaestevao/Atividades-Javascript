//var pesquisa=process.argv[2]
var fs = require("fs");

fs.readFile("funcionarios.json",function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(JSON.parse(data));   
    }   
});


