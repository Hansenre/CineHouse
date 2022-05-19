const myself = 
    {
    nome: "Rafael",
    sobrenome: "Hansen",
    apresentacao : function(){
        return "Olá sou " + this.nome +" "+ this.sobrenome;
    }
}


console.log(myself)
console.log(myself.apresentacao());




function Carro(aMarca, oModelo){
    this.marca = aMarca;
    this.modelo = oModelo;
}

let listaCarros = [];
listaCarros = new Carro("Wolks","Gol");
console.log(listaCarros);