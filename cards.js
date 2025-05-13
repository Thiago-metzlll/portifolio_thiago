import { cards_bd } from "./cards_bd.js"

export function creatCards(){
    let cards_section = document.getElementById('cards');

    // Cria 12 cartões
    for (let i = 0; i < cards_bd.length; i++) {
        let div_cartao = document.createElement('div');
        div_cartao.className = 'card';

        // Criando o título do cartão
        let titulo_cartao = document.createElement('h1');
        titulo_cartao.textContent = cards_bd[i].nome;  // Aqui é 'nome', não 'titulo_cartao'

        // Criando o valor do cartão
        let valor_cartão = document.createElement('h4');
        valor_cartão.textContent = `Linguagens: ${cards_bd[i].languages}`;  // Aqui é 'languages', não 'valor_cartão'

        // Criando o ícone do cartão
        let i_cartao = document.createElement('i');
        i_cartao.className = 'fa-solid fa-face-smile';  // Usei um ícone fixo aqui, ou altere conforme necessário

        // Adicionando os elementos ao cartão
        div_cartao.appendChild(i_cartao);
        div_cartao.appendChild(titulo_cartao);
        div_cartao.appendChild(valor_cartão);

        // Adicionando o cartão à seção de cartões
        cards_section.appendChild(div_cartao);
    }
}