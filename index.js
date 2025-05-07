document.addEventListener('DOMContentLoaded',()=> {//Aqui estamos fazendo o cabeçário usando JS e com a variável let (mais comum e que muda)
    //let div: cria a memória, ou seja, a tag, deve ser nesse modelo, usando a biblioteca docment. Entre parêntesis é o tipo da tag (div,h1...) e em laranja, o nome da classe ou id
    //appendChild: insere um filho
    //h5.textContent: inserir um texto

    let div = document.createElement(div)
    div.className = 'header_info'

    let profile_logo = document.createElement(div)
    div.className = 'profile_logo'
    div.appendChild(profile_logo)

    let div = document.createElement(h5)
    div.appendChild(occupation)
    h5.textContent = 'Estudante no Senac-FB'

    let div = document.createElement(div)
    div.className = 'buttons_header'
    div.appendChild(button)

    let div = document.createElement(div)
    div.className = 'button'

    let div = document.createElement(i)
    div.className = 'fa-solid fa-house'

    //A primeira id
    let div = document.createElement(h5)
    div.id = 'home'

    let fa_brands fa_github = document.createElement(i)
    div.className = 'fa-brands fa-github'

})