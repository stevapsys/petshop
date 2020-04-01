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
}; 
*/ 


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

const adicionarPet = (tipo, nome, idade, raca, porte, sexo, vacinado, tutor) => {
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

const visualizarPets = () => {
    //percorrer toda lista de pets
    //for(let i=0; i < listaDeAnimais.length; i++){

       // let animal = listaDeAnimais[i]

    listaDeAnimais.forEach((animal, index) => {
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
 
       
       //dentro do meu ConteudoPet, estou adicionando um filho
       divConteudoPet.appendChild(pSeparador)
       divConteudoPet.appendChild(pNomeAnimal)
       divConteudoPet.appendChild(pTipoAnimal)

       divPet.appendChild(divConteudoPet)

    })
}    

       

const buscarPet = nomePet => { 
        for (let index = 0; index < listaDeAnimais.length; index++) {
            const animal = listaDeAnimais[index];

            if(animal.nome == nomePet){
              return  console.log("Sim, existe esse animal cadastrado no sistema");
            }
        }   
    console.log('Não existe animal cadastrado!'); 
}

const removerPet = nomePet => {
    let totalDePets = listaDeAnimais.length
    listaDeAnimais.filter((animal,index)=>{
        return nomePet != animal.nome  
    }) 
    if(totalDePets == listaDeAnimais.length){
        return console.log("Não encontramos um animal com o nome de: " + nomePet)
    }
    console.log("O animal: " +nomePet + " foi removido com sucesso")
}

/*
//FUNÇÕES EXPRESSAS colocando a function na variavel, essa function só começa a funcionar a partir dessa linha do código
const somar = function(){

}

//AREA FUNCTION - quando tem uma linha só, pode retirar o return e as chaves
const somar = (a,b) => a + b 


//AREA FUNCTION: função anomima sem parametros - area function sem parametros, sou obrigada a colocar o parenteses 

const visualizarPets = ()=>{

}

//AREA FUNCTION: função anomima com um parametros - posso omitir o parenteses
const visualizarPets = valor =>{

}

//AREA FUNCTION: dois parametros ou mais -> tem que voltar os parenteses
const visualizarPets = (valorA,valorB) => {

}

*/

//USANDO UM FOR EACH - metódo de um array
let listaDeFrutas  = ['maçã', 'banana', 'uva'];

listaDeFrutas.forEach(function(valor,index){
    console.log("O valor da posição: " + index +" é " + valor);
}) 

//USANDO O FILTER

listaDeFrutas.filter((fruta,index) => {
    return fruta != 'banana'
}) 

//USANDO O MAP

listaDeFrutas.map((fruta,index)=> {
    return "Fruta " + fruta
})

//USANDO O REDUCE
let listaSaldo = [10,0,30,100]
listaSaldo.reduce((resultado,valor,index)=>{

    return resultado + valor
})