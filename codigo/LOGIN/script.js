
let btn = document.querySelector(".fa-eye")

btn.addEventListener("click", ()=>{
    let inputSenha = document.querySelector("#senha")

    if(inputSenha.getAttribute("type") == "password"){
        inputSenha.getAttribute("type", "password") 
    }

    else {
        inputSenha.setAttribute("type", "password")
    }
})

function entrar(){
    let email = document.querySelector("#email")
    let labelEmail = document.querySelector("#labelEmail")

    let password = document.querySelector("#password")
    let labelSenha = document.querySelector("#labelSenha")

}