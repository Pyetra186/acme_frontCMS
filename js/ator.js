'use strict'

const tbl_ator = document.getElementById('tbl_ator')


async function criarLinhaAtor() {
    const ator = await getAtor()

    console.log(ator);

    ator.forEach(async(ator, index) => {
        const tr = document.createElement('tr')

        // Adicionando classes de cor alternadas
        tr.classList.add(index % 2 === 0 ? 'bg-violet-900' : 'bg-violet-900')

        const id = document.createElement('td')
        id.classList.add('text-gray-300', 'px-16')
        id.textContent = ator.id

        const nome = document.createElement('td')
        nome.classList.add('px-16')
        nome.textContent = ator.nome

        const biografia = document.createElement('td')
        biografia.classList.add('px-16')
        biografia.textContent = ator.biografia

        const atualizar = document.createElement('td')
        
        const apagar = document.createElement('td')
        const imgApagar = document.createElement('img')
        imgApagar.src = './img/deletar.png'

        tr.replaceChildren(id, nome, biografia, atualizar, apagar)
        console.log(tr);
        tbl_ator.append(tr)
    })
}

async function getAtor() {
    const url = 'http://localhost:8080/v2/acmefilmes/ator'
    const response = await fetch(url)
    const data = await response.json()

    return data.ator
}
criarLinhaAtor()

