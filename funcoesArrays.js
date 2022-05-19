/*function ola(){
    let saudacao = "Olá, Tudo bem?";
    return saudacao;
}
console.log(ola());


var nomes = ["Frida", "Diego", "Sofia"];
console.log(nomes);
var primeiroNome = nomes.shift();
console.log(nomes);
console.log(primeiroNome);
var acrescentarNome = nomes.unshift("Rafael", "Arthur");
console.log(nomes);
console.log(acrescentarNome);
*/
/*var nomes = ["Frida", "Diego", "Sofia"];

nomes.push("Rafael");
console.log(nomes);
nomes.pop();
console.log(nomes);
nomes.shift();
console.log(nomes);
nomes.unshift("Rafael", "Elias", "Hansen");
console.log(nomes);
let juntarNomes = nomes.join();
console.log(juntarNomes);
let separarNomesCom = nomes.join(" - ");
console.log(separarNomesCom);
*/

const fs = require('fs');
let moment = require('moment');
const mercado = require('./ListaDeCompras');
let listaDeCompras = require('./ListaDeCompras');

let listaCompras = fs.readFileSync(__dirname + '/listaDeCompras.txt', 'utf8');
let data = moment().format('DD MM YYYY');

console.log(listaCompras);
console.log(listaDeCompras);
console.log(data);
