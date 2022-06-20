
fetch('http://jsonplaceholder.typicode.com/users')
    .then(conteudo => conteudo.json())
    .then(usuarios => {
        const nomes = usuarios.reduce((accumulator, usuarios) => {
            accumulator += `<li>${usuarios.name}</li>`
            return accumulator    
        }, '')
        const ul = document.querySelector('.unico')
        ul.innerHTML = nomes
    })