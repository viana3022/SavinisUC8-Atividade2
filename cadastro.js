// informação: Data do evento

let DataDoEvento = "29/08/2021"
   console.log(DataDoEvento)

// informando: Data Atual

let DataAtual = "19/08/2021"
   console.log(DataAtual)

if (DataDoEvento>DataAtual) {
    console.log("Cadastro para evento disponível")
    
} else{
    console.log("Cadastro não disponível")
}

// Conferindo: Idade Participantes

var idade = 18
if (idade <= 18) {
    console.log("Idade Permitida")
    
} else{
    console.log("Idade inválida,acesso negado")
}

// Conferindo: Se o numero de participantes e menor que 100

let ListaDeParticipantes = ["Any", "Rose", "Sara", "Vinicius", "Matheus", "Pedro"]
   console.log(ListaDeParticipantes)

if (ListaDeParticipantes.length < 100) {
    console.log("Cadastro Permitido")
    
} else{
    console.log("Cadastro Negado,lista cheia")
}


