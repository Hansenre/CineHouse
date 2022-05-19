let listaCompras1 = ["Pão", "Maça","Banana"];
let listaCompras2 = ["Queijo", "Café", "Laranja"];

let comprar = [...listaCompras1,...listaCompras2];
console.log(comprar);


let motor = {
    motor: "Fusion 2.0",
    combustao: "Fossea",
    cilindradas: 213
}

const carro = {
    nome: "Fox",
    marca: "wolks",
    ...motor
}
console.log(carro);

function reias(...params){
    console.log(params);
}
reias("a");
reias("a", "b");

let notas = [3.2,4,10,8.8];
console.log(Math.min(...notas));

