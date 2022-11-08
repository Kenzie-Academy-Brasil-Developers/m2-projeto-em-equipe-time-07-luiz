let email = document.getElementById('email')
let password = document.getElementById('senha')
let login = document.getElementById('login')
let register = document.getElementById('register')
let span = document.getElementById('span')


const access = async () =>{

    const data = {
        "email" : `${email.value}`,
        "password" : `${password.value}`
    }
    const request = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }

    const responseJSON = await fetch('https://m2-api-adot-pet.herokuapp.com/session/login',request)
    const response = await responseJSON.json()

    if(responseJSON.ok == true){

        localStorage.setItem('token',response.token)
        localStorage.setItem('name',response.user.name)
        localStorage.setItem('img',response.user.avatar_url)

        loading()

        setTimeout(()=>{
            window.location.href = '../pages/homeLogged-in.html'
        },1000)
    }else{
        span.innerText = 'Usuário ou senha incorreto'
        email.focus()
    }

}

const loading = () => {
    let main = document.getElementById('main')

    let divBack = document.createElement('div')
    let divImg = document.createElement('div')
    let img = document.createElement('img')

    divBack.classList = 'background'
    img.src = '../assets/loading-gif.gif'

    divBack.appendChild(divImg)
    divImg.appendChild(img)
    main.appendChild(divBack)
}

const checkInput = (email,password) =>{

    if(email.value != '' && password.value != ''){
        login.disabled = false
    }else{
        login.disabled = true
    }
}

email.addEventListener('input', () =>{
    checkInput(email,password)
})

password.addEventListener('input', () =>{
    checkInput(email,password)
})

login.addEventListener('click', () =>{
        if(email.value != '' && password.value != ''){
            access()
        }else{
            alert('Preencha os campos')
        }
})

register.addEventListener('click', () => {
    loading ()
    setTimeout(() => {
        window.location.href = '../pages/register.html'
    },500)
})