let setor = "Comercial"
const funcionarios=[
        {
            "nome": "Joao Cardoso Barbosa",
            "salario": 3000,
            "setor": "Administrativo"
        },
        {
            "nome": "Rebeca Costa Oliveira",
            "salario": 2000,
            "setor": "Produção"
        },
        {
            "nome": "Ana Azevedo Alves",
            "salario": 5000,
            "setor": "Comercial"
        },
        {
            "nome": "Marisa Dias Barbosa",
            "salario": 6500,
            "setor": "Produção"
        },
        {
            "nome": "Igor Cunha Lima",
            "salario": 1200,
            "setor": "Comercial"
        },
        {
            "nome": "Sarah Sousa Costa",
            "salario": 1500,
            "setor": "Comercial"
        },
        {
            "nome": "Giovanna Santos Araujo",
            "salario": 2500,
            "setor": "Produção"
        },                           
        {
            "nome": "Otávio Souza Cardoso",
            "salario": 3500,
            "setor": "Administrativo"
        },
        {
            "nome": "Leonardo Souza Lima",
            "salario": 1500,
            "setor": "Produção"
        },
        {
            "nome": "Nicolash Cavalcanti Fernandes",
            "salario": 4000,
            "setor": "Comercial"
        },                             
        {
            "nome": "Matheus Ribeiro Rocha",
            "salario": 4500,
            "setor": "Administrativo"
        },
        {
            "nome": "Vitor Ribeiro Barbosa",
            "salario": 3500,
            "setor": "Produção"
        },
        {
            "nome": "Carlos Oliveira Rodrigues",
            "salario": 7000,
            "setor": "Administrativo"
        },
        {
            "nome": "Mateus Pinto Pereira",
            "salario": 5500,
            "setor": "Administrativo"
        },
        {
            "nome": "Vinícius Pereira Castro",
            "salario": 3500,
            "setor": "Comercial"
        },      
{
            "nome": "Gabriela Souza Pereira",
            "salario": 2500,
            "setor": "Administrativo"
        },
        {
            "nome": "Emily Melo Cavalcanti",
            "salario": 2000,
            "setor": "Produção"
        },
        {
            "nome": "Luís Carvalho Silva",
            "salario": 1500,
            "setor": "Comercial"
        },
        {
            "nome": "José Melo Araujo",
            "salario": 4000,
            "setor": "Produção"
        },
        {
            "nome": "Manuela Ferreira Cardoso",
            "salario": 6000,
            "setor": "Comercial"
        },
        {
            "nome": "Anna Gomes Rodrigues",
            "salario": 7000,
            "setor": "Comercial"
        },
        {
            "nome": "Anna Sousa Goncalves",
            "salario": 5000,
            "setor": "Produção"
        },                           
        {
            "nome": "Gabrielle Araujo Souza",
            "salario": 7500,
            "setor": "Administrativo"
        },
        {
            "nome": "Maria Cavalcanti Rocha",
            "salario": 3000,
            "setor": "Produção"
        },
        {
            "nome": "Luis Lima Rocha",
            "salario": 2000,
            "setor": "Comercial"
        },                             
        {
            "nome": "Rodrigo Correia Souza",
            "salario": 3500,
            "setor": "Administrativo"
        },
        {
            "nome": "Guilherme Silva Cavalcanti",
            "salario": 5500,
            "setor": "Produção"
        },
        {
            "nome": "Nicole Costa Pinto",
            "salario": 2000,
            "setor": "Administrativo"
        },
        {
            "nome": "Emilly Gomes Araujo",
            "salario": 3000,
            "setor": "Administrativo"
        },
        {
            "nome": "Thaís Sousa Carvalho",
            "salario": 4000,
            "setor": "Comercial"
        },
{
            "nome": "Vitor Oliveira Sousa",
            "salario": 5500,
            "setor": "Administrativo"
        },
        {
            "nome": "José Sousa Lima",
            "salario": 7500,
            "setor": "Produção"
        },
        {
            "nome": "Mateus Barros Carvalho",
            "salario": 8000,
            "setor": "Comercial"
        },
        {
            "nome": "Júlio Cavalcanti Martins",
            "salario": 5000,
            "setor": "Produção"
        },
        {
            "nome": "Antônio Almeida Goncalves",
            "salario": 2000,
            "setor": "Comercial"
        },
        {
            "nome": "Ana Castro Dias",
            "salario": 9500,
            "setor": "Comercial"
        },
        {
            "nome": "Rafaela Cunha Santos",
            "salario": 2000,
            "setor": "Produção"
        },                           
        {
            "nome": "Giovanna Barros Santos",
            "salario": 3000,
            "setor": "Administrativo"
        },
        {
            "nome": "Gabrielly Martins Alves",
            "salario": 4000,
            "setor": "Produção"
        },
        {
            "nome": "Otávio Araujo Costa",
            "salario": 3500,
            "setor": "Comercial"
        },                             
        {
            "nome": "Bruna Lima Azevedo",
            "salario": 3000,
            "setor": "Administrativo"
        },
        {
            "nome": "Rebeca Ferreira Oliveira",
            "salario": 2500,
            "setor": "Produção"
        },
        {
            "nome": "Breno Sousa Rocha",
            "salario": 6000,
            "setor": "Administrativo"
        },
        {
            "nome": "Vitória Castro Almeida",
            "salario": 5000,
            "setor": "Administrativo"
        },
        {
            "nome": "Marina Goncalves Rodrigues",
            "salario": 4000,
            "setor": "Comercial"
        }
    
    ]
    

function maiorSalario() {
    let maiorSalario = 0;
    let nomeSortudo;

    for (let i in funcionarios) {
        if (funcionarios[i].salario > maiorSalario) {
            maiorSalario = funcionarios[i].salario;
            nomeSortudo = funcionarios[i].nome;
        }
    }
    console.log(`A pessoa melhor bonificada (R$${maiorSalario}) na empresa é ${nomeSortudo}`);
    console.log('\n');
    menorSalario();
    mediaSalarial();
}

function menorSalario(){
    let menorSalario = funcionarios[0].salario
    let nomeAzarado;

    for (i = 0; i <funcionarios.length; i++){
        if(funcionarios[i].salario < menorSalario){
            menorSalario = funcionarios[i].salario
            nomeAzarado = funcionarios[i].nome
        }
    }
    console.log(`A menor bonificação (R$${menorSalario}) na empresa é ${nomeAzarado}`);
}

function mediaSalarial(){
    let somaSalario = 0;
    for(let i in funcionarios){
        somaSalario += funcionarios[i].salario;
    }
    let mediaSalarial = (somaSalario / funcionarios.length);
    console.log('\n');
    console.log(`A média salarial da empresa é de R$${mediaSalarial.toFixed(2)}`);
}

function setorSalario(value){
    let maiorSalario = 0;
    let nomeMaior;
    let menorSalario = funcionarios[0].salario;
    let nomeMenor;
    for(let i in funcionarios){
        if(value === funcionarios[i].setor){
            if(funcionarios[i].salario > maiorSalario){
                maiorSalario = funcionarios[i].salario
                nomeMaior = funcionarios[i].nome
            }
            continue;
        }
    }
    for(let i in funcionarios){
        if(value === funcionarios[i].setor){
            if(funcionarios[i].salario < menorSalario){
                menorSalario = funcionarios[i].salario
                nomeMenor = funcionarios[i].nome

            }
        }
    }
    console.log('\n');
    console.log(`O maior salario do setor ${value} é R$${maiorSalario}, e o funcionário que o possui é: ${nomeMaior}`);        
    console.log('\n');
    console.log(`O menor salario do setor ${value} é R$${menorSalario}, e o funcionário que o possui é: ${nomeMenor}`);
    setorMedialSalario(value);
}

function setorMedialSalario(value){
    let somaSalario = 0
    let setorFuncionarios = 0
    for(let i = 0; i < funcionarios.length; i++){
        if(value === funcionarios[i].setor){
            somaSalario += funcionarios[i].salario;
            setorFuncionarios++;
        }else{
            continue;
        }
    }
    let mediaSalarialSetor = (somaSalario / setorFuncionarios);
    console.log('\n');
    console.log(`A média salarial do setor ${value} é de R$${mediaSalarialSetor.toFixed(2)}`);
}
maiorSalario();
setorSalario(setor)
