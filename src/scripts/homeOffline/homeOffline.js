
let randonArr =[]
const requestPetAll = async() => {

    try{
        const resposta = await fetch(`https://m2-api-adot-pet.herokuapp.com/pets`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
   
        const response = await resposta.json()
        for(let i = 0; i < 6; i++){
            let index = Math.floor(Math.random()*(response.length-7))
            randonArr.push(response[index])
        }

        criarCards(randonArr)
        return response
    }catch (error) {
        console.log(error)
    }
}

requestPetAll()

const tagUl = document.querySelector("ul")
function criarCards(arr){

    arr.forEach((element) => {

        const tagLi = document.createElement("li")
        tagLi.className = `tagLi`
    
        const divImg = document.createElement("div")
        divImg.className = `divImg`
    
        const image = document.createElement("img")
        image.src = element.avatar_url
    
        const tagName = document.createElement("h2")
        tagName.innerText = element.name
    
        const tagEspecie = document.createElement("p")
        tagEspecie.innerText = element.species
    
        divImg.appendChild(image)
    
        tagLi.append(divImg, tagName, tagEspecie)
    
        tagUl.appendChild(tagLi)
    })
}

function chengePage(){

    const btnRegister = document.querySelector(".buttonRegister")
    const btnLogin = document.querySelector(".buttonLogin")

    btnLogin.addEventListener("click", ()=>{
        window.location.assign("./src/pages/login.html")
    })

    btnRegister.addEventListener("click", ()=>{
        window.location.assign("./src/pages/register.html")
    })
}
chengePage()