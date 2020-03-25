let divPet =document.getElementById("pets");

document.createElement('div'); 

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

function visualizarPets(){
    //percorrer toda lista de pets
    for(let i=0; i < listaDeAnimais.length; i++){

        let animal = listaDeAnimais[i]

        //pra cada pet vai acontecer: 
        let divConteudoPet = document.createElement('div')
        // vai criar <div> </div>
        divConteudoPet.setAttribute('class','bichinho')

        let pSeparador = document.createElement('p');
        pSeparador.textContent = "-----------------";
        //console.log("------------------")

        let pNomeAnimal = document.createElement('p');
        pNomeAnimal.textContent = "Nome do animal: " + animal.nome;
        //console.log("Nome do animal: " + animal.nome)

       let pTipoAnimal = document.createElement('p');
       pTipoAnimal.textContent = "Tipo de animal: " + animal.tipo
       // console.log("Tipo de animal: " + animal.tipo)
 
       //console.log("Sexto do animal: " + animal.sexo)
       //console.log("Nome do tutor: " + animal.tutor.nome)
       
       //dentro do meu ConteudoPet, estou adicionando um filho
       divConteudoPet.appendChild(pSeparador)
       divConteudoPet.appendChild(pNomeAnimal)
       divConteudoPet.appendChild(pTipoAnimal)

       divPet.appendChild(divConteudoPet)
    }
}

function buscarPet(nomePet) { 
        for (let index = 0; index < listaDeAnimais.length; index++) {
            const animal = listaDeAnimais[index];

            if(animal.nome == nomePet){
              return  console.log("Sim, existe esse animal cadastrado no sistema");
            }
        }   
    console.log('Não existe animal cadastrado!'); 
}

