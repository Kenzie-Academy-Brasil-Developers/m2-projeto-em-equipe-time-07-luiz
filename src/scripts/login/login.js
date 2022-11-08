let email = document.getElementById('email')
let senha = document.getElementById('senha')
let login = document.getElementById('login')


const realizarLogin = async () =>{

    const dados = {
        "email" : `${email.value}`,
        "password" : `${senha.value}`
    }
    const request = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(dados)
    }

    const requisicaoJSON = await fetch('https://m2-api-adot-pet.herokuapp.com/session/login',request)
    const requisicao = await requisicaoJSON.json()
    console.log(requisicaoJSON)
    console.log(requisicao)
}

login.addEventListener('click',function(){
    realizarLogin()
})
