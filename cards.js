import { cards_bd } from "./cards_bd"

export function creatCards(){
    let cards_section = document.getElementById('cards')

    //Cria 12 cartões

    for(let i = 0; i < cards_bd.length; i++){

    let div_cartao = document.createElement('div')
    div_cartao.className = 'card'

    let titulo_cartao = document.createElement('h1')
    titulo_cartao.textContent = 'Nome Produto'
    titulo_cartao.textContent = cards_bd[i].titulo_cartao


    let valor_cartão = document.createElement('h4')
    valor_cartão.textContent = 'R$ 88.00'
    valor_cartão.textContent = cards_bd[i].valor_cartão

    let i_cartao = document.createElement('i')
    i_cartao.className = cards_bd[i].i_cartao

    div_cartao.appendChild(i_cartao)
    div_cartao.appendChild(titulo_cartão)
    div_cartao.appendChild(valor_cartão)

    cards_section.appendChild(div_cartao)}
}