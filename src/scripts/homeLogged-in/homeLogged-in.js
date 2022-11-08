

const requestPetsAdoptable = async () => {

    try {
        const request = await fetch(`https://m2-api-adot-pet.herokuapp.com/pets`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })

        const response = await request.json()
        console.log(response)
        return response
        
    } catch (error) {
        console.log(error)
    }
}

const allPets = await requestPetsAdoptable()

const renderPetsHomeLoggedIn = (list) => {
    const listAdoptablePets = document.querySelector(".pet-list")

    list.forEach(pet => {
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

            divDescription.append(petName, petType, adoptButton)
            cardLi.append(petImg,divDescription)
            listAdoptablePets.appendChild(cardLi)
        }
    });

}

renderPetsHomeLoggedIn(allPets)
