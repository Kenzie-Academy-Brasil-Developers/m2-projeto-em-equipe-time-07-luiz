let token = localStorage.getItem('token')


export function openModal(children){

    const BodyModal = document.getElementById('corpo')
    const backgroudContainer = document.createElement("section")
    const mainContainer = document.createElement("section")
    const closeModalButton = document.createElement("button")

    backgroudContainer.classList.add("modal-background")
    mainContainer.classList.add("modal-container")
    closeModalButton.classList.add("modal-close")

    closeModalButton.innerText = "X"

    closeModalButton.addEventListener("click", (e) =>{

        const {className} = (e.target)
        //console.log(className)
        
        if(className === "modal-background" || className === "modal-close"){

            backgroudContainer.remove()
        }
    })


    const divHeader = document.createElement("div")
    divHeader.className = `divHeaderModal`

    const divFooter = document.createElement("div")
    divFooter.className = `divFooterModal`
    

    divHeader.appendChild(closeModalButton)

    mainContainer.appendChild(divHeader)
    mainContainer.append(children, divFooter)
    backgroudContainer.appendChild(mainContainer)
    BodyModal.appendChild(backgroudContainer)
}



export function conteudoModalDeletarUser(){

    const DivConteudoModalDeletar = document.createElement("div")
    DivConteudoModalDeletar.className = `DivConteudoModalDeletar`

    const tagH1DeletarFuncionario = document.createElement("h1")

    tagH1DeletarFuncionario.innerText = `Deseja mesmo deletar sua conta?`

    const bottonCancelar = document.createElement("botton")
    bottonCancelar.innerText = `Não desejo deletar minha conta`
    bottonCancelar.type = `button`
    bottonCancelar.className = `bottonCancelarDelUser`

    const bottonDeletarUser = document.createElement("botton")
    bottonDeletarUser.className = `bottonDeletarUser`
    bottonDeletarUser.type = `button`
    bottonDeletarUser.innerText = `Quero deletar minha conta`
    
    bottonDeletarUser.addEventListener("click", (e) =>{

        e.preventDefault()

        requisicaoDeletarUser()

        window.location.reload()
    })

    DivConteudoModalDeletar.append(tagH1DeletarFuncionario, bottonCancelar, bottonDeletarUser)
    openModal(DivConteudoModalDeletar)
}


export async function requisicaoDeletarUser(){
    const resposta =  await fetch(`https://m2-api-adot-pet.herokuapp.com/users/profile`,{
          
          method:"DELETE",
          headers:{
            'Content-Type':'application/json',
            Authorization:`Bearer: ${token}`
        },
      }).then((response)=>response.json() )
      
      .then((response)=> {
              
          console.log(response)
          alert(`usuário deletado com sucesso`)
        
          if(response.error){
  
              alert(response.error)
          }
      })
      .catch(error =>{
          console.log(error)
      })
      return resposta
} 


export async function requisicaoEditarUser(user){
    const resposta =  await fetch(`https://m2-api-adot-pet.herokuapp.com/users/profile`,{          
          method:"PATCH",
          headers:{
            "Content-Type":"application/json",
            Authorization : `Bearer: ${token}`
        },
          body: JSON.stringify(user)
      }).then((response)=>response.json() )
      
      .then((response)=> {
          console.log(response)
      })
      .catch(error =>{
          console.log(error)
      })
      return resposta
} 


export function conteudoModalEditarUser(){

    const DivConteudoModalEditar = document.createElement("div")
    DivConteudoModalEditar.className = `DivConteudoModalEditar`

    const tagH1DeletarFuncionario = document.createElement("h1")

    tagH1DeletarFuncionario.innerText = `Atualizar Perfil`

    const inputNome = document.createElement("input")
    const inputEmail = document.createElement("input")
    const inputAvatar = document.createElement("input")

    inputEmail.type = `email`
   
    inputNome.placeholder = `Seu nome`
    inputEmail.placeholder = `Seu Email`
    inputAvatar.placeholder = `Url Avatar`

    const bottonDeletarEditar = document.createElement("botton")
    bottonDeletarEditar.className = `bottonDeletarEditar`
    bottonDeletarEditar.type = `button`
    bottonDeletarEditar.innerText = `Editar`
    
    bottonDeletarEditar.addEventListener("click", (e) =>{

        e.preventDefault()

        const user = {

            "avatar_url": inputAvatar.value,
            "name": inputNome.value,
            
        }
        //console.log(user)

        if (inputNome.value != `` & inputAvatar.value != ``){
            
            localStorage.setItem('name',inputNome.value)
            localStorage.setItem('img',inputAvatar.value)

            requisicaoEditarUser(user)
            setTimeout(()=>{
                window.location.reload()
            },500)
        }
    })
    
    DivConteudoModalEditar.append(tagH1DeletarFuncionario, inputNome, inputEmail, inputAvatar, bottonDeletarEditar)
    openModal(DivConteudoModalEditar)
}


export async function requisicaoCriarPet(user){
    const resposta =  await fetch(`https://m2-api-adot-pet.herokuapp.com/pets`,{          
          method:"POST",
          headers:{
            "Content-Type": "application/json",
            Authorization : `Bearer: ${token}`
        },
          body: JSON.stringify(user)
      }).then((response)=>response.json() )
      
      .then((response)=> {
              
         console.log(response)
           
      })
      .catch(error =>{
          console.log(error)
      })
      return resposta
} 


export function conteudoModalCriarPet(){

    const DivConteudoModalEditar = document.createElement("div")
    DivConteudoModalEditar.className = `DivConteudoModalEditar`

    const tagH1 = document.createElement("h1")

    tagH1.innerText = `Cadastrar seu pet`

    const inputNomePet = document.createElement("input")
    const inputEspecie = document.createElement("input")
    const inputAvatar = document.createElement("input")
   
    inputNomePet.placeholder = `Nome do pet`
    inputEspecie.placeholder = `Espécie do pet`
    inputAvatar.placeholder = `Url Avatar`

    const bottonDeletarCriar = document.createElement("botton")
    bottonDeletarCriar.className = `bottonDeletarCriar`
    bottonDeletarCriar.type = `button`
    bottonDeletarCriar.innerText = `Cadastrar`
    
    bottonDeletarCriar.addEventListener("click", (e) =>{

        e.preventDefault()
        if (inputNomePet.value != `` & inputAvatar.value != `` & inputEspecie.value != ``){
            const user = {

                "name": inputNomePet.value,
                "bread": "SRD",
                "species": inputEspecie.value,
                "avatar_url": inputAvatar.value,
                
            }
            //console.log(user)
            //console.log("Criando")

            requisicaoCriarPet(user)
            setTimeout(()=>{
                window.location.reload()
            },500)
        }        
        else{
            alert("requisição negada, input esta em branco")
        }
    })
    
    DivConteudoModalEditar.append(tagH1, inputNomePet, inputEspecie, inputAvatar, bottonDeletarCriar)
    openModal(DivConteudoModalEditar)
}


export async function requisicaoEditarPet(user, idPet){
    const resposta =  await fetch(`https://m2-api-adot-pet.herokuapp.com/pets/${idPet}`,{          
          method:"PATCH",
          headers:{
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        },
          body: JSON.stringify(user)
      }).then((response)=>response.json() )
      
      .then((response)=> {
              
          console.log(response)
          
      })
      .catch(error =>{
          console.log(error)
      })
      return resposta
} 


export function conteudoModalEditarPet(idPet){

    const DivConteudoModalEditar = document.createElement("div")
    DivConteudoModalEditar.className = `DivConteudoModalEditar`

    const tagH1Editar = document.createElement("h1")

    tagH1Editar.innerText = `Atualizar Pet`

    const inputNomePet = document.createElement("input")
    const inputEspecie = document.createElement("input")
    const inputAvatar = document.createElement("input")
   
    inputNomePet.placeholder = `Nome do pet`
    inputEspecie.placeholder = `Espécie do pet`
    inputAvatar.placeholder = `Url Avatar`

    const bottonEditarPet = document.createElement("botton")
    bottonEditarPet.className = `bottonEditarPet`
    bottonEditarPet.type = `button`
    bottonEditarPet.innerText = `Atualizar`
    
    bottonEditarPet.addEventListener("click", (e) =>{

        e.preventDefault()
        if (inputNomePet.value != `` & inputAvatar.value != `` & inputEspecie.value != ``){
            const user = {

                "name": inputNomePet.value,
                "species": inputEspecie.value,
                "avatar_url": inputAvatar.value,
                "bread": "SRD"
                
            }
            // console.log(user)
            // console.log("Criando")

            setTimeout(()=>{
                window.location.reload()
            },500)
        } else{
            alert("requisição negada, input esta em branco")
        }    
    })
    
    DivConteudoModalEditar.append(tagH1Editar, inputNomePet, inputEspecie, inputAvatar, bottonEditarPet)
    openModal(DivConteudoModalEditar)
}