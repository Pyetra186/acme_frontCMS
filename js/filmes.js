//responsavel por interagir com os filmes

export async function getFilmes (){
    const url = 'http://localhost:8080/v2/acmeFilmes/filmes'
    const response = await fetch(url)
    const data= await response.json()

   return data.filmes
}

export async function getFilme (id) {
    const url = `http://localhost:8080/v2/acmefilmes/filme/${id}`
    const response = await fetch(url)
    const data= await response.json()

    return data.filme[0]
}

export async function postfilme (filme) {
   const url = 'http://localhost:8030/v2/acmefilmes/filme'
   const options = {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify (filme)
   }
   const response = await fetch (url, options)

   return response.ok
}

export async function putfilme (filme) {
   const url = `http://localhost:8080/v2/acmefilmes/filme/${filme.id}`
   const options = {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify (filme)
   }
   const response = await fetch (url, options)

   return response.ok
}

export async function deletefilme (id) {
   const url = `http://localhost:8080/v2/acmefilmes/filme/${id}`
   const options = {
      method: 'DELETE',
   }
   const response = await fetch (url, options)

   return response.ok
}

export async function getAtor(){
   const url = 'http://localhost:8080/v2/acmefilmes/ator'
   const response = await fetch(url)
   const data = await response.json()

   data.ator
}

export async function postDiretor (diretor) {
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
export async function getDiretor(){
   const url = 'http://localhost:8080/v2/acmefilmes/diretor'
   const response = await fetch(url)
   const data = await response.json()

   data.diretor
}



export async function getClassificacao(){
   const url = 'http://localhost:8080/v2/acmefilmes/classificacoes'
   const response = await fetch(url)
   const data = await response.json()
   
   data.classificacao
}








export async function getGenero(){
   const url = 'http://localhost:8080/v2/acmefilmes/genero'
   const response = await fetch(url)
   const data = await response.json()

   data.genero
}


export async function getGeneroId (id) {
   const url = `http://localhost:8080/v2/acmefilmes/genero/${id}`
   const response = await fetch(url)
   const data= await response.json()

   return data.genero[0]
}

export async function deleteGenero (id) {
   
   const url = `http://localhost:8080/v2/acmefilmes/genero/${id}`
   const options = {
      method: 'DELETE',
   }
   const response = await fetch (url, options)

   return response.ok

}


export async function postGenero (genero) {
   const url = 'http://localhost:8080/v2/acmefilmes/genero'
   const options = {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify (genero)
   }
   const response = await fetch (url, options)

   return response.ok
}


export async function putGenero(id, genero) {
  const url = `http://localhost:8080/v2/acmefilmes/genero/${id}`
  const options = {
   method: 'PUT',
   headers:{
      'Content-Type': 'application/json'
   },
   body:JSON.stringify(genero)
  }

  const response = await fetch(url, options)
  return response.ok
}





