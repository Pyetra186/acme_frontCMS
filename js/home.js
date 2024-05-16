/*'use strict'
import {getFilmes, getFilme, deleteFilme} from "./filmes.js"

function criarCard (filme){

    const branco = document.createElement('div')
    branco.classList.add( 'w-[800px]', 'h-[97px]', 'pt-[15px]' ,'drop-shadow-lg' , 'flex', 'justify-center' , 'bg-white', 'rounded-[20px]', 'drop-shadow-lg')

    const cinza = document.createElement('div')
    cinza.classList.add( 'w-[766px]', 'h-[70px]', 'flex', 'flex-row','justify-align' , 'font-bold' , 'pl-[10px]' , 'text-xl','drop-shadow-[0_35px_35px_rgba(0,0,0.20,0.50)]' , 'bg-[#D9D9D9]', 'rounded-[8px]')

     const id = document.createElement('p')
     id.textContent = filme.id

    const button = document.createElement('button')

    const titulo = document.createElement('p')
    titulo.textContent = filme.nome

    const icone = document.createElement('div')
    icone.classList.add('flex', 'justify-align' , 'gap-10' , 'ml-10')

    const iconeEditar = document.createElement('i')
    iconeEditar.classList.add('bx', 'bx-edit-alt', 'cursor-pointer')

    const iconeExcluir = document.createElement('i')
    iconeExcluir.classList.add('fixed','bx', 'bx-trash', 'cursor-pointer')

    // icone.append(iconeEditar,iconeExcluir)
    button.append(id, titulo, iconeEditar, iconeExcluir)
    cinza.append(button)
    branco.append(cinza)
    
    iconeEditar.addEventListener('click', () =>{
        window.location.href = './home.html' 
    })

    iconeDeletar.addEventListener('click', () =>{
        deleteFilme(filme)
        window.location.reload()
    })



    return branco
    
}

async function preencherContainer(){
    const container = document.getElementById('pai')


    const filmes = await getFilmes()

    filmes.forEach (filme => {
        const card = criarCard(filme)
        container.appendChild(card)
        console.log(card)
    })
}

preencherContainer()*/

'use strict'

const tbl_filmes = document.getElementById('tbl_filme')


async function criarLinhaFilme() {
    const filmes = await getFilmes()

    console.log(filmes);

    filmes.forEach(async(filme, index) => {
        const tr = document.createElement('tr')

        // Adicionando classes de cor alternadas
        tr.classList.add(index % 2 === 0 ? 'bg-violet-900' : 'bg-violet-900')

        const id = document.createElement('td')
        id.classList.add('text-gray-300', 'px-16')
        id.textContent = filme.id

        const nome = document.createElement('td')
        nome.classList.add('px-16', 'text-gray-300')
        nome.textContent = filme.nome

        const preco = document.createElement('td')
        preco.classList.add('text-blue-500', 'px-16')
        preco.textContent = Number(filme.valor_unitario).toFixed(2)

        const duracao = document.createElement('td')
        duracao.classList.add('px-16', 'text-gray-300')
        duracao.textContent = filme.duracao


        const editar = document.createElement('td')
        
        const apagar = document.createElement('td')
        const imgApagar = document.createElement('img')
        imgApagar.src = '../img/deletar.png'

        tr.replaceChildren(id, nome, preco, duracao,editar, apagar)
        console.log(tr);
        tbl_filmes.append(tr)
    })
}

async function getFilmes() {
    const url = 'http://localhost:8080/v2/acmeFilmes/filmes'
    const response = await fetch(url)
    const data = await response.json()

    return data.filmes
}
criarLinhaFilme()

iconeDeletar.addEventListener('click', async () => {
    deleteFilme(info.id_filme)
    window.location.reload()
  })