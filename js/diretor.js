'use strict'

const tbl_diretor = document.getElementById('tbl_diretor')


async function criarLinhaDiretor() {
    const diretor = await getDiretor()

    console.log(diretor);

    diretor.forEach(async(diretor, index) => {
        const tr = document.createElement('tr')

        // Adicionando classes de cor alternadas
        tr.classList.add(index % 2 === 0 ? 'bg-violet-900' : 'bg-violet-900')

        const id = document.createElement('td')
        id.classList.add('text-gray-300', 'px-16')
        id.textContent = diretor.id

        const nome = document.createElement('td')
        nome.classList.add('px-16', 'text-gray-300')
        nome.textContent = diretor.nome

        const biografia = document.createElement('td')
        biografia.classList.add('px-16', 'text-gray-300')
        biografia.textContent = diretor.biografia

        const atualizar = document.createElement('td')
        
        const apagar = document.createElement('td')
        const imgApagar = document.createElement('img')
        imgApagar.src = './img/deletar.png'

        tr.replaceChildren(id, nome, biografia, atualizar, apagar)
        console.log(tr);
        tbl_diretor.append(tr)
    })
}

async function getDiretor() {
    const url = 'http://localhost:8080/v2/acmefilmes/diretor'
    const response = await fetch(url)
    const data = await response.json()

    return data.diretor
}
criarLinhaDiretor()
