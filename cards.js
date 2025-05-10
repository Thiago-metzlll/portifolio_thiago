export function creatCards(){
    let cards_section = document.getElementById('cards')

    //Cria 12 cartões

    for(let i = 0; i < 12; i++){

    let div_cartao = document.createElement('div')
    div_cartao.className = 'card'

    let titulo_cartão = document.createElement('h1')
    titulo_cartão.textContent = 'Nome Produto'

    let valor_cartão = document.createElement('h4')
    valor_cartão.textContent = 'R$ 88.00'

    let i_cartao = document.createElement('i')
    i_cartao.className = 'fa-solid fa-face-smile'

    div_cartao.appendChild(i_cartao)
    div_cartao.appendChild(titulo_cartão)
    div_cartao.appendChild(valor_cartão)

    cards_section.appendChild(div_cartao)}
}