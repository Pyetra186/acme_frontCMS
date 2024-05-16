'use strict'


const titulo = document.getElementById('titulo')
const sinopse = document.getElementById('sinopse')
const duracao = document.getElementById('duracao')
const dataLancamento = document.getElementById('dataLancamento')
const dataRelancamento = document.getElementById('dataRelancamento')
const valor = document.getElementById('valor')
const capa = document.getElementById('capa')
const classificacao = document.getElementById('classificacao')
const cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click' , async() => {
    
    try {
        const tituloInput = titulo.value
        const sinopseIpunt = sinopse.value
        const duracaoInput = duracao.value
        const dataLancamentoInput = dataLancamento.value
        const dataRelancamentoInput = dataRelancamento.value
        const valorInput = valor.value
        const capaInput = capa.value
        const classificacaoInput = classificacao.value
        const insert = {
            nome: tituloInput,
            sinopse: sinopseIpunt,
            duracao: duracaoInput,
            data_lancamento: dataLancamentoInput,
            data_relancamento: dataRelancamentoInput,
            valor_unitario: valorInput,
            foto_capa: capaInput,
            classificacao: classificacaoInput
            
            
        }
        
        const cadastrar = await postFilme(insert)
        if(insert){
            window.location.href = './home.html'
        }
        else{
            alert("errooooo")
        }
    } catch (error) {
        alert(error)
    }
    
    
})