'use strict'

const tbl_genero = document.getElementById('tbl_genero')


async function criarLinhaGenero() {
    const genero = await getGenero()

    genero.forEach(async(genero, index) => {
        const tr = document.createElement('tr')

        // Adicionando classes de cor alternadas
        tr.classList.add(index % 2 === 0 ? 'bg-violet-900' : 'bg-violet-900')

        const id = document.createElement('td')
        id.classList.add('text-gray-300', 'px-16')
        id.textContent = genero.id

        const nome = document.createElement('td')
        nome.classList.add('px-16')
        nome.textContent = genero.nome

        const atualizar = document.createElement('td')
        
        const apagar = document.createElement('td')
        const imgApagar = document.createElement('img')
        imgApagar.src = './img/deletar.png'

        tr.replaceChildren(id, nome, atualizar, apagar)
        console.log(tr);
        tbl_genero.append(tr)
    })
}

async function getGenero() {
    const url = 'http://localhost:8080/v2/acmefilmes/genero'
    const response = await fetch(url)
    const data = await response.json()

    return data.genero
}
criarLinhaGenero()
