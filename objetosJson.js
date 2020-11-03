var pessoa = { //objetos Json pode ter varios tipos
    "nome": "João",
    idade : 40,
    telefone : "(99) 9999-9999",

    animaisDeEstimacao:[
        "Totó",
        "Bob"
    ],
    pai : {
        nome: "João",
        idade : 68
    }

};
//console.log(pessoa.nome); acesso só o nome
//console.log(pessoa) acessa toda a pessoa
//console.log(pessoa.pai.nome);
//pessoa.animaisDeEstimacao.push("Thor"); manipula o array
pessoa.nome=pessoa.nome + "Silva"
//console.log(pessoa)
pessoa.mae= {
    nome:"Maria",
    idade:68
}


console.log(JSON.stringify(pessoa));

/*salvarDadosPessoa(pessoa) (parametro)
function salvarDadosPessoa(pessoa){
    console.log(pessoa)
*/