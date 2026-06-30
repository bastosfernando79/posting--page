const formulario = document.querySelector("#formulario-post");
const inputTitulo = document.querySelector("#titulo");
const inputConteudo = document.querySelector("#conteudo");

const feedDePosts = document.querySelector('#feed-de-posts');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const data = {
        title: inputTitulo.value,
        body: inputConteudo.value,
        userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    .then(function(resposta) {
        return resposta.json()
    })
    .then(function(postCriado) {
        const novoPostHTML = `
            <article style="margin-bottom: 20px;">
                <h2 style="margin-top: 0; color: #0866ff;">${postCriado.title}</h2>
                <p>${postCriado.body}</p>
            </article>
        `;

        feedDePosts.insertAdjacentHTML('afterbegin', novoPostHTML);

        formulario.reset();
    })
    .catch(function(erro) {
        console.error("Deu erro na requisição: ", erro);
    });
});
