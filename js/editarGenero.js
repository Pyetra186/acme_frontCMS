'use strict'
import { getGenero, getGeneroId, postGenero, putGenero } from "./filmes.js";
const id = new URLSearchParams(window.location.search).get('id')




// Definir elementos fora da função para garantir escopo global
const nome = document.getElementById('nome');
const salvar = document.getElementById('salvar');

// Função para puxar os dados do filme pelo ID
async function dadosGenero() {
    if (id) {
        try {
            const infoGenero = await getGeneroId(id);
            console.log(infoGenero.nome)

            // Atribuir valores aos elementos do formulário
            nome.value = infoGenero.nome || ''
        } catch (error) {
            console.error('Erro ao obter dados do filme:', error);
        }
    } else {
        console.error('ID do genero não fornecido.');
    }
}


salvar.addEventListener('click', async () => {
    try {
        const nomeInput = nome.value;
        const alteracoes = {
            nome: nomeInput,
        };

        console.log('Alterações a serem enviadas:', alteracoes);

        const resultado = await putGenero(id, alteracoes);
        console.log(resultado);

        if (resultado) {
            window.location.href = './homeGenero.html';
        } else {
            console.error('Erro ao salvar as alterações');
        }
    } catch (error) {
        console.error('Erro ao salvar as alterações:', error);
    }
});

// Chamar a função para carregar os dados do filme
dadosGenero();