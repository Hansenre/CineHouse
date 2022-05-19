let pessoa = {
    nome: "Rafael",
    sobrenome: "Hansen",
    idade: 39
}
// objeto deverá ter o mesmo nome da propriedade.
let {nome, sobrenome, idade} = pessoa;

console.log(nome);
console.log(sobrenome);
console.log(idade);

const carros =["Fusca","Gol","Fox","207"];
//para arrats não precisamos ter o mesmo nome, mas sim a ordem do array.
let [iFusca, Gol,Fox,i207] = carros;

console.log(iFusca);
console.log(i207);

