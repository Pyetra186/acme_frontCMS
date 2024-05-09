'use strict'

const tbl_classificacao = document.getElementById('tbl_classificacao')


async function criarLinhaClassificacao() {
    const classificacao = await getClassificacao()

    

    classificacao.forEach(async(classificacao, index) => {
        const tr = document.createElement('tr')

        // Adicionando classes de cor alternadas
        tr.classList.add(index % 2 === 0 ? 'bg-violet-900' : 'bg-violet-900')

        const id = document.createElement('td')
        id.classList.add('text-gray-300', 'px-16')
        id.textContent = classificacao.id

        const classificacaoo = document.createElement('td')
       classificacaoo.classList.add('px-16')
       classificacaoo.textContent = classificacao.classificacaoo

        const caracteristicas = document.createElement('td')
        caracteristicas.classList.add('px-16')
        caracteristicas.textContent = classificacao.caracteristicas

        const atualizar = document.createElement('td')
        
        const apagar = document.createElement('td')
        const imgApagar = document.createElement('img')
        imgApagar.src = './img/deletar.png'

        tr.replaceChildren(id, classificacaoo, caracteristicas, atualizar, apagar)
        console.log(tr);
        tbl_classificacao.append(tr)
    })
}

async function getClassificacao() {
    const url = 'http://localhost:8080/v2/acmefilmes/classificacoes'
    const response = await fetch(url)
    const data = await response.json()

    return data.classificacao
}
criarLinhaClassificacao()