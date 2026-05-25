
//Cria os cards no HTML pelo JS
function criarCards (books){

    //console.log(livros[0].books[0].title)

    //Recebe a div principal onde serão criados os cards de livros
    let divPrincipal = document.getElementById('cardProdutos')

    //Estrutura de repetição para carregar os livros do array de livros
    books.livros.forEach(function(livro){

        //Criar elementos no HTML
        let divCaixaProduto     = document.createElement('div')
        let h2CaixaTitulo       = document.createElement('h2')
        let figureCaixaImagem   = document.createElement('figure')
        let imagem              = document.createElement('img')
        let divCaixaTexto       = document.createElement('div')
        let spanISBNTitulo      = document.createElement('span')
        let spanISBNTexto       = document.createElement('span')

        //Definir atributos dos elementos HTML
        divCaixaProduto.setAttribute('class', 'caixa_produto')
        h2CaixaTitulo.setAttribute('class', 'caixa_titulo')
        figureCaixaImagem.setAttribute('class', 'caixa_imagem')
        imagem.setAttribute('src', livro.foto)
        divCaixaTexto.setAttribute('class', 'caixa_texto')
        spanISBNTitulo.setAttribute('id', 'isbn_titulo')
        spanISBNTexto.setAttribute('id', 'isbn_texto')

        //Atribuindo conteúdo nos elementos de texto
        h2CaixaTitulo.innerText = livro.nome
        spanISBNTitulo.innerText = 'ISBN: '
        spanISBNTexto.innerText = livro.isbn

        //Associar elementos dentro de elementos (Pai Filho)
        divPrincipal.appendChild(divCaixaProduto)
        divCaixaProduto.appendChild(h2CaixaTitulo)
        divCaixaProduto.appendChild(figureCaixaImagem)
        figureCaixaImagem.appendChild(imagem)
        divCaixaTexto.appendChild(spanISBNTitulo)
        divCaixaTexto.appendChild(spanISBNTexto)
        divCaixaProduto.appendChild(divCaixaTexto)

    })
}

//Consumir dados de uma API de Livros
async function carregarLivrosAPI (){
    // let url = 'https://projeto-livraria-latx.onrender.com/v2/livraria/livro'
    let url = 'http://localhost:8080/livro'

    //Para garantir a resposta da API 
    //deve-se utilizar o Await e o Async
    let resposta = await fetch(url)

    //Recebe os dados em formato JSON da API
    let dados = await resposta.json()

    //Chama a Função para carregar os cards e
        //encaminha os dados recebidos da API
    criarCards(dados)


}

window.addEventListener('load', function(){
    carregarLivrosAPI()
})