const getLocalStorage = (key) => {
    const user = localStorage.getItem(key) || ""
    return user
}

const verify = () => {
    const user = getLocalStorage("token")
    if(user === 'null'){
        window.location.assign("../pages/login.html")
    }
}

const logout = () => {
    const logout = document.getElementById("logout")
    logout.addEventListener("click", ()=>{
        localStorage.removeItem("token")
        window.location.assign("../../index.html")
    })
}

export {
    logout,
    verify,
    getLocalStorage
}
