/*const somar = (n1, n2) => n1 + n2;
const subtrair = (n1, n2) => n1 - n1;

const calculadora = (n1, n2, operacao) => operacao(n1, n2);

console.log(calculadora(10, 30, somar));
*/

//ESTUDANDO OS CALLBACKS
/*
function adicionarHttp(url) {
    return "http://"+ url;
}

function processar(lista, funcao){
    const newarray = [];
    for (let i= 0; i < lista.length;i++){
        newarray.push(funcao(lista[i]))
    }
    return newarray;
}
console.log(processar(["www.google.com","www.amazon.com"], adicionarHttp));*/

let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];
//Vai retornar um array conforme as condições do código.
let maiores = numeros.filter(function(valor){
    return valor > 18;
})
//Vai mapear e retornar todo o array.
let mapping = numeros.map(function(valor){
    return  valor;
})
let numerosNovos = numeros.map((item) => {
    console.log(item);
    return `${item} é um número!`;
})
// Retorna o primeiro valor encontrado, se TRUE.
let findsome = numeros.find(function(valor){
    return valor % 2 == 1;
})
//Também podemos utilizar o arrow function...
/*let findsome = numeros.find((valor) =>{
    return valor % 2 == 1;
})
*/
let reducesome = numeros.reduce(function(acumulador, valor){
    return acumulador + valor;
})
//Também podemos utilizar o arrow function...
/*let reducesome = numeros.reduce((acumulador, valor) => {
    return acumulador + valor;
})
*/
numeros.forEach(function(item){
    console.log(`O Número ${item} é: ${item % 2 ==0 ? "Par" : "Impar"}`);
})


console.log(maiores);
console.log(mapping);
console.log(numerosNovos);
console.log(findsome);
console.log(reducesome);

