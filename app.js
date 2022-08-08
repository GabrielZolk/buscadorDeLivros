const livros = require('./database')

const readline = require('readline-sync')

const input = readline.question('Deseja buscar um livro?S/N')
if(input.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('Produtividade e Estilo de Vida', 'Desenvolvimento Pessoal', 'Economia')

    const inputCategoria = readline.question('Qual categoria você escolhe:')

    const retorno = livros.filter(livro => livro.categoria === inputCategoria)

    console.table(retorno)
} else {
   const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Essas são todas as opções disponiveis:')
    console.table(livrosOrdenados)
}