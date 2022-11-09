import { getLocalStorage, logout, verify } from "../global/global.js"

logout()
verify()


const requestPetsAdoptable = async () => {

    try {
        const request = await fetch(`https://m2-api-adot-pet.herokuapp.com/pets`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })

        const response = await request.json()

        return response
        
    } catch (error) {
        console.log(error)
    }
}

const createAdoption = async (body1)=> {
    const token = getLocalStorage("token")
    try {
        const request = await fetch(`https://m2-api-adot-pet.herokuapp.com/adoptions/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body1)
        })
        const response = await request.json()

        return response

    } catch (error) {
        console.log(error)
    }
}

const allPets = await requestPetsAdoptable()
      
           

const adoptPets = async() => {
    const adoptButton = [...document.querySelectorAll(".adopt-button")]
    adoptButton.forEach((button)=> {
        button.addEventListener("click", async() => {
            const body = {}
            body.pet_id = button.id
            await createAdoption(body)
            const allPets2 = await requestPetsAdoptable()

            renderPetsHomeLoggedIn(allPets2)
        })
    })
}

const renderPetsHomeLoggedIn = async(list) => {
    let randonArr2 =[]
    for(let i = 0; i < allPets.length; i++){
        let index = Math.floor(Math.random()*(list.length-7))
        randonArr2.push(list[index])
    }


    const listAdoptablePets = document.querySelector(".pet-list")
    listAdoptablePets.innerText = ""
    randonArr2.forEach(pet => {
       if (pet.available_for_adoption){
            const cardLi = document.createElement("li")
            const petImg = document.createElement("img")
            const divDescription = document.createElement("div")
            const petName = document.createElement("h2")
            const petType = document.createElement("p")
            const adoptButton = document.createElement("button")

            cardLi.classList.add("card")
            divDescription.classList.add("card-description")
            petName.classList.add("card-title")
            petType.classList.add("type")
            adoptButton.classList.add("adopt-button")

            petImg.src = `${pet.avatar_url}`
            petName.innerText = `${pet.name}`
            petType.innerText = `${pet.species}`
            adoptButton.innerText = "Me adota?"
            adoptButton.id = `${pet.id}`

            divDescription.append(petName, petType, adoptButton)
            cardLi.append(petImg,divDescription)

            if(listAdoptablePets.children.length < 6){
                listAdoptablePets.appendChild(cardLi)
            }



        }
    });
    adoptPets()
}

renderPetsHomeLoggedIn(allPets)

