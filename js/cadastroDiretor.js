'use strict'

import { postDiretor } from "./filmes"


const nome = document.getElementById('nome')
const dataNascimento = document.getElementById('dataNascimento')
const dataFalecimento = document.getElementById('dataFalecimento')
const biografia = document.getElementById('biografia')
const foto = document.getElementById('foto')
const sexo = document.getElementById('sexo')
const cadastro = document.getElementById('cadastro')

cadastro.addEventListener('click' , async() => {

   try {
    const nomeInput = nome.value
    const biografiaIpunt = biografia.value
    const dataNascimentoInput = dataNascimento.value
    const dataFalecimentoInput = dataFalecimento.value
    const fotoInput = foto.value
    const sexoInput = sexo.value
    const insert = {
        nome: nomeInput,
        sinopse: biografiaIpunt,
        duracao: dataNascimentoInput,
        data_lancamento: dataFalecimentoInput,
        foto: fotoInput,
        sexo: sexoInput
    }

    async function postDiretor(){
        const url = 'http://localhost:8080/v2/acmefilmes/diretor'
        const options = {
      method: 'POST',
      headers: {
         'Content-Type' : 'application/json'
      },
      body: JSON.stringify (diretor)
   }
   const response = await fetch (url, options)

   return response.ok

    }
    cadastro = await postDiretor(insert)
    if(insert){
         window.location.href = './homeDiretor.html'
    }
    else{
        alert("errooooo")
    }
   } catch (error) {
    alert(error)
   }
    

})