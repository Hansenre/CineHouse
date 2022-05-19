let carro = {
    nome: "Fox",
    ano: "2011"
}
//for in utilizado com objetos literais;
for(let prop in carro){
    console.log(prop);
}
for(let prop in carro){
    console.log(carro[prop]);
}

let series = ["Breaking Bad", "Dexter", "Person of Interest"];
//for of utilizado com arrays, matrizes e strings.
for(let valor of series){
    console.log(valor);
}
