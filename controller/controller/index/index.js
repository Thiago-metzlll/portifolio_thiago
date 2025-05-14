document.addEventListener('DOMContentLoaded', () => {
    //Aqui estamos fazendo o cabeçário usando JS e com a variável let (mais comum e que muda)
    //let div: cria a memória, ou seja, a tag, deve ser nesse modelo, usando a biblioteca docment. Entre parêntesis é o tipo da tag (div,h1...) e em laranja, o nome da classe ou id
    //appendChild: insere um filho
    //h5.textContent: inserir um texto
    let header_body = document.getElementById('header')

    let header = document.createElement('div')
    header.className = 'header_info line_space-around'

    let profile_logo = document.createElement('img')
    profile_logo.className = 'profile_logo'

    let occupation = document.createElement('h5')
    occupation.textContent = 'Estudante no Senac-FB'

    header.appendChild(profile_logo)
    header.appendChild(occupation)

    header_body.appendChild(header)

    let buttons_header = document.createElement('div')
    buttons_header.className = 'buttons_header'

    let button_home = document.createElement('button')
    button_home.className = 'button'

    let fa_solidfa_house = document.createElement('i')
    fa_solidfa_house.className = 'fa_solid fa_house'
    button_home.appendChild(fa_solidfa_house)

    let button_text_house = document.createElement('h5')
    button_text_house.id = 'home'
    button_text_house.textContent = 'Home'

    button_home.appendChild(button_text_house)

    let button_github = document.createElement('button')
    button_github.className = 'button'

    let fa_brandsfa_github = document.createElement('i')
    fa_brandsfa_github.className = 'fa_brandsfa_github'
    button_github.appendChild(fa_brandsfa_github)

    let button_text_git = document.createElement('h5')
    button_text_git.id = 'Github'
    button_text_git.textContent = 'Github'

    button_github.appendChild(button_text_git)

    let button_projetos = document.createElement('button')
    button_projetos.className = 'button'

    let fa_solidfa_code = document.createElement('i')
    fa_solidfa_code.className = 'fa_solidfa_code'
    button_projetos.appendChild(fa_solidfa_code)

    let button_text_projetos = document.createElement('h5')
    button_text_projetos.id = 'Projetos'
    button_text_projetos.textContent = 'Projetos'

    button_projetos.appendChild(button_text_projetos)

    buttons_header.appendChild(button_home)
    buttons_header.appendChild(button_github)
    buttons_header.appendChild(button_projetos)

    header_body.appendChild(buttons_header)
})