const body = document.querySelector("body")
const icon = document.querySelector("#sunmoon")
const icons = document.querySelector("#luna")
const darklight = document.querySelectorAll(".darklights")
const modal = document.querySelector(".mainModal")
const menu = document.querySelector("#menu")
const exit = document.querySelector(".exit")
const download = document.querySelector(".download")
const btnLi = document.querySelector(".btnLi")

let moon = localStorage.getItem("night") ? localStorage.getItem("night") : "light"

const btnMode = () => {
    if (body.classList.contains("active")) {
        // console.log(icon.classList.contains("fa-moon"));

        icon.classList.add("fa-sun")
        icon.classList.remove("fa-moon")
    } else {
        icon.classList.add("fa-moon")
        icon.classList.remove("fa-sun")
    }
}
btnMode()
const btnsLuna = () => {
    if (body.classList.contains("active")) {
        // console.log(icon.classList.contains("fa-moon"));

        icons.classList.add("fa-sun")
        icons.classList.remove("fa-moon")
    } else {
        icons.classList.add("fa-moon")
        icons.classList.remove("fa-sun")
    }
}
btnsLuna()

const darkMode = () => {
    if (moon == "dark") {
        body.classList.add("active")
    } else {
        body.classList.remove("active")
    }
}
darkMode()

darklight.forEach((item) => {
    item.addEventListener("click", () => {
        if (moon == "light") {
            moon = "dark"
        } else {
            moon = "light"
        }
        localStorage.setItem("night", moon)
        darkMode()
        btnMode()
        btnsLuna()
    })

})

menu.addEventListener("click", () => {

modal.classList.add("active")

})

exit.addEventListener("click", (e) => {
    
modal.classList.remove("active")

})

btnLi.addEventListener("click", () => {
    // console.log(e.target);
    if (modal.style.display = "block"){
            modal.style.display="none"
    }else{
            modal.style.display="block"
    }
})






