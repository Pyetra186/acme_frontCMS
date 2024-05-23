'use strict'
import {getGenero,postGenero, putGenero} from "./filmes.js"

// Import das tags do HTML pelo ID
const titulo = document.getElementById('nome')
const cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click', ()=>{

    const tituloInput = titulo.value
    const insert ={
        nome: tituloInput,
        
    }

    postGenero(insert)
    console.log(insert)
    window.location.href = './homeGenero.html'
})

