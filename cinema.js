

//ESSAS FUNÇÕES SÃO UTILIZANDO UM CATALOGO JS.
//const filmes = require('./catalogo');



/*let addMovie = {
    codigo: 0003,
    titulo: "Homem Aranha 2- Voltando para Casa",
    duracao: 2.4,
    atores: ["Marlon Brando", "Elisabeth Taylor", "Bruce Willis"],
    anoDeLancamento: 2022,
    emCartaz: true
}
    
//Podemos adicionar um conteúdo dentro da função de duas formas...
function adicionarFilme(filme){
    filmes.push(filme);
}

adicionarFilme(addMovie);
adicionarFilme({
    codigo: 0004,
    titulo: "Breaking Bad",
    duracao: 2.4,
    atores: ["Marlon Brando", "Elisabeth Taylor", "Bruce Willis"],
    anoDeLancamento: 2019,
    emCartaz: false
});



console.log(filmes);

function buscarFilme(identificador){
    for(let i = 0; i<filmes.length; i++){
        if (filmes[i].codigo === identificador){
            console.log(filmes[i].titulo);
            console.log("Em Cartaz: " + filmes[i].emCartaz);
        }
    }
}
//FORMA CORRETA DE ACHAR UMA PROPRIEDADE DENTRO DE UM ARRAY.
function buscarFilme(identificador){
    return filmes.find((filme) => {
        return filme.codigo === identificador;
    })
}

console.log(buscarFilme(2));
buscarFilme(1);
buscarFilme(3);
/*
function alterarStatusEmCartaz(identificador){
    for (let i = 0;i < filmes.length;i++){
        if (filmes[i].codigo === identificador && filmes[i].emCartaz === true)
        {
            filmes[i].emCartaz =  false;
            console.log(filmes[i].titulo + " " + "Em Cartaz: " + filmes[i].emCartaz);
        }
        else if (filmes[i].codigo === identificador && filmes[i].emCartaz === false)
        {
            filmes[i].emCartaz =  true;
            console.log(filmes[i].titulo + " " + "Em Cartaz: " + filmes[i].emCartaz);
        }
    }
}

alterarStatusEmCartaz(2);
alterarStatusEmCartaz(1);
alterarStatusEmCartaz(3);*/

//ESSAS FUNÇÕES SÃO UTILIZANDO UM CATALOGO JSON.

const JsonFilmes = require('./database/catalogo2.json');

function listarTodosOsFilmes(lista){
    let text = "A lista de filmes é:  \n";
    for (let i = 0;i < lista.length;i++){
        text +=(`Filme: ${lista[i].titulo}
        Duração: ${lista[i].duracao}
        Atores: ${lista[i].atores}
        Ano de Lançamento: ${lista[i].anoDeLancamento}
        Está em Cartaz: ${lista[i].emCartaz ? "Sim":"Não"}\n`) 
    }
    console.log(text);
}

const listarFilmesEmCartaz = () => {
    for (let i =0;i <JsonFilmes.length;i++){
        const filme = JsonFilmes[i];
        if (filme.emCartaz){
            console.log(`Filme: ${filme.titulo}
       Duração: ${filme.duracao}
       Atores: ${filme.atores}
       Ano de Lançamento: ${filme.anoDeLancamento}
       Está em Cartaz: ${filme.emCartaz ? "Sim":"Não"}\n`)
        }
    }
}

const alterarStatusEmCartaz = (codigo) =>{
    const filmeEncontrado = JsonFilmes.find((filme) => {
        return filme.codigo === codigo
    });

    filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz;
    console.log(filmeEncontrado);

}
listarTodosOsFilmes(JsonFilmes);
listarFilmesEmCartaz(JsonFilmes);
console.log();
alterarStatusEmCartaz(22);


