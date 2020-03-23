/*let animal = {
    tipo: "Gato", 
    nome: "Cão",
    idade: 5, 
    raça: undefined,
    porte: "medio",
    sexo: "M",
    vacinado: true,
    tutor: {
        nome: "Mateus", 
        telefone: "(11) 99214-1001"
    },
}; */ 

let listaDeAnimais = [
    {
        tipo: "Gato", 
        nome: "Cão",
        idade: 5, 
        raça: undefined,
        porte: "medio",
        sexo: "M",
        vacinado: true,
        tutor: {
            nome: "Mateus", 
            telefone: "(11) 99214-1001"
        },
    },
    {
        tipo: "Gato", 
        nome: "Nina",
        idade: 5, 
        raça: undefined,
        porte: "medio",
        sexo: "F",
        vacinado: true,
        tutor: {
            nome: "Mateus", 
            telefone: "(11) 99214-1001"
        }   
    } 
];

function adicionarPet(tipo, nome, idade, raca, porte, sexo, vacinado, tutor){
    let novoPet = {
        //montar o objeto
        tipo, 
        nome,
        idade:idade, 
        raça:raca,
        porte:porte,
        sexo:sexo,
        vacinado:vacinado,
        tutor: {
            nome:tutor,
            telefone:undefined
        }
    }
    listaDeAnimais.push(novoPet);

    console.log("Pet cadastrado com sucesso!")
}

function visualizarPets() {
    for(let i=0; i < listaDeAnimais.length; i++){

        let animal = listaDeAnimais[i]
        console.log("------------------")
        console.log("Nome do animal: " + animal.nome)
        console.log("Tipo de animal: " + animal.tipo)
        console.log("Sexto do animal: " + animal.sexo)
        console.log("Nome do tutor: " + animal.tutor.nome)
    }
}