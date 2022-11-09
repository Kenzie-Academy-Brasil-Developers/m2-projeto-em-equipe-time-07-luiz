let emailL = localStorage.getItem('email')
let nameL = localStorage.getItem('name')
let imgL = localStorage.getItem('img')
let token = localStorage.getItem('token')

let email = document.getElementById('email')
let nome = document.getElementById('name')
let img = document.getElementById('img')

const dinamizar = () => {
    email.innerText =`Email: ${emailL}`
    nome.innerText = `Nome: ${nameL}`
    img.src = imgL
}
dinamizar()


const criarCards = (element) => {

    let ul = document.getElementById('ul-cards')

    let li = document.createElement('li')
    let divImg = document.createElement('div')
    let img = document.createElement('img')
    let divInfoCard = document.createElement('div')
    let divContainerInfoCard = document.createElement('div')
    let divUm = document.createElement('div')
    let h3Nome = document.createElement('h3')
    let divDois = document.createElement('div')
    let h3Especie = document.createElement('h3')
    let divTres = document.createElement('div')
    let h3Disponivel = document.createElement('h3')
    let divQuatro = document.createElement('div')
    let button = document.createElement('button')


    divImg.classList = 'div-img-card'
    divInfoCard.classList = 'div-info-card'
    divContainerInfoCard.classList = 'container-info-card'

    h3Nome.innerText = `Nome : ${element.name}`
    h3Especie.innerText = `Espécie : ${element.species}`

    if(element.avaiable_for_adoption==true){
        h3Disponivel.innerText = `Adotável ? : Sim`
    }else{
        h3Disponivel.innerText = `Adotável ? : Não`
    }

    img.src = `${element.avatar_url}`
    button.innerText = 'Atualizar'


    li.appendChild(divImg)
    divImg.appendChild(img)
    li.appendChild(divInfoCard)
    divInfoCard.appendChild(divContainerInfoCard)
    divContainerInfoCard.append(divUm,divDois,divTres,divQuatro)
    divUm.appendChild(h3Nome)
    divDois.appendChild(h3Especie)
    divTres.appendChild(h3Disponivel)
    divQuatro.appendChild(button)
    ul.appendChild(li)
}

const request = async () => {

    const data = {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            Authorization:`Bearer: ${token}`
        }
    }

    const call = await fetch('https://m2-api-adot-pet.herokuapp.com/pets/my_pets',data)
    const returnCall = await call.json()
    console.log(returnCall)
    returnCall.forEach(pet => criarCards(pet))
}

request()