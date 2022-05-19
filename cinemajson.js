// ESSA MANEIRA DE FAZER AS FUNÇÕES DE "FIND" SEM UM LOOP FOR É MENOS AGRESSIVO PARA O PROCESSAMENTO DO SISTEMA.
const filmesjson = require('./database/catalogo2.json');

function adicionarFilme(filme) { // ouvinte adicionar filme
    filmesjson.push(filme);
}

function buscarFilme(identificador) {
    return filmesjson.find((filme) => {
        return filme.codigo === identificador; // true || false
    })
}

adicionarFilme({
    codigo: 44,
    titulo: 'Homem Aranha ',
    duracao: 3.5,
    atores: ['fulano 1', 'fulano 2', 'fulano 3'],
    anoLancamento: 2021,
    emCartaz: false
});

const filmeEncontrado = buscarFilme(22);

filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz
console.log('Filme encontrado:', filmeEncontrado);


//COM CALLBACK...
/*const alterarStatusEmCartaz2 = (codigo, callback) => {
    const filmeEncontrado2 = callback(codigo);

    filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz;
    console.log(filmeEncontrado);
}

alterarStatusEmCartaz(2, buscarFilme);*/

const listarFilmesDeLongaDuracao = () => {
    return filmesjson.filter((filme) => {
        return filme.duracao >= 2.0;
    })

}
const filtrarlistarFilmesDeLongaDuracao = listarFilmesDeLongaDuracao();
console.log(filtrarlistarFilmesDeLongaDuracao);

