'use strict'

import { deleteGenero } from "./filmes.js"



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
        nome.classList.add('px-16', 'text-gray-300')
        nome.textContent = genero.nome

        const atualizar = document.createElement('td')
      

        const imgAtualizar = document.createElement('img')
        imgAtualizar.src = './img/edit.svg'
        imgAtualizar.classList.add('w-5', 'my-2', 'mr-[70px]',  )
     
        const imgApagar = document.createElement('img')
        imgApagar.src = './img/deletar.png'
        imgApagar.classList.add('items-center', 'my-2', 'mr-[20px]' ) 

        tr.replaceChildren(id, nome, atualizar, imgApagar, imgAtualizar)
        tbl_genero.append(tr)


        imgAtualizar.addEventListener('click',()=>{
            window.location.href='./editarGenero.html?id='+genero.id
        })

        imgApagar.addEventListener('click',()=>{
            deleteGenero(genero.id)
            window.location.reload()
        })
    
        


    })
}

async function getGenero() {
    const url = 'http://localhost:8080/v2/acmefilmes/genero'
    const response = await fetch(url)
    const data = await response.json()

    return data.genero
}
criarLinhaGenero()
