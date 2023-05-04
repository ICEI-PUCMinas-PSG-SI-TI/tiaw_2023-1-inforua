

let btn = document.querySelector(".fa-eye")

let fistname = document.querySelector("#fistname")
let labelNome = document.querySelector("#labelNome")
let validfistname = false

let lasttname = document.querySelector("#lasttname")
let labelSobrenome = document.querySelector("#labelSobrenome")
let validlastname = false

let email = document.querySelector("#email")
let labelEmail = document.querySelector("#labelEmail")
let validemail = false

let number = document.querySelector("#number")
let labelCelular = document.querySelector("#labelCelular")
let validnumber = false

let password = document.querySelector("#password")
let labelSenha = document.querySelector("#labelSenha")
let validpassword = false

let confSenha = document.querySelector("#confSenha")
let labelconfSenha = document.querySelector("#label.confSenha")
let validConfSenha = false

let msgError = document.querySelector("#msgError")
let msgSuccess = document.querySelector("#msgSuccess")

fistname.addEventListener("keyup", ()=>{
    if(fistname.value.length <= 2){
        labelNome.setAttribute("style", "color: red")
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute("style", "border-color: red")
    validfistname = false
  } else {
    labelNome.setAttribute("style", "color: green")
    labelNome.innerHTML = 'Nome'
    nome.setAttribute("style", "border-color: green")
    validfistname = true
  }
})

lasttname.addEventListener("keyup", () => {
    if(lasttname.value.length <= 4){
      labelSobrenome.setAttribute("style", "color: red")
      labelSobrenome.innerHTML = 'Sobrenome *Insira no minimo 3 caracteres'
      lasttname.setAttribute("style", "border-color: red")
      validlastname = false
    } else {
      labelSobrenome.setAttribute("style", "color: green")
      labelSobrenome.innerHTML = 'Sobrenome'
      lasttname.setAttribute("style", "border-color: green")
      validlastname = true
    }
  })

  email.addEventListener("keyup", ()=>{
    if(email.value.length <= 2){
        labelEmail.setAttribute("style", "color: red")
        labelEmail.innerHTML = 'Email *Insira com @gmail'
        email.setAttribute("style", "border-color: red")
        validemail = false
  } else {
    labelEmail.setAttribute("style", "color: green")
    labelEmail.innerHTML = 'Email'
    email.setAttribute("style", "border-color: green")
    validemail = true
  }
})

number.addEventListener("keyup", ()=>{
    if(number.value.length <= 2){
        labelCelular.setAttribute("style", "color: red")
    labelCelular.innerHTML = 'Celular *(DDD) 9-' 
    number.setAttribute("style", "border-color: red")
    validnumber = false
  } else {
    labelCelular.setAttribute("style", "color: green")
    labelCelular.innerHTML = 'Celular'
    number.setAttribute("style", "border-color: green")
    validnumber = true
  }
})
  
  password.addEventListener("keyup", () => {
    if(password.value.length <= 5){
      labelSenha.setAttribute("style", "color: red")
      labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
      password.setAttribute("style", "border-color: red")
      validpassword = false
    } else {
      labelSenha.setAttribute("style", "color: green")
      labelSenha.innerHTML = 'Senha'
      password.setAttribute("style", "border-color: green")
      validpassword = true
    }
  })
  
  confSenha.addEventListener("Keyup", () => {
    if(confSenha.value != confirmSenha.value){
      labelconfSenha.setAttribute("style", "color: red")
      labelConfSenha.innerHTML = "Confirmar Senha *As senhas não conferem"
      confSenha.setAttribute("style", "border-color: red")
      validConfSenha = false
    } else {
      labelConfSenha.setAttribute("style", "color: green")
      labelConfSenha.innerHTML = "Confirmar Senha"
      confSenha.setAttribute("style", "border-color: green")
      validConfSenha= true
    }
  })


function cadastrar(){
    if(validfistname && validlastname && validemail && validnumber && validpassword && validConfSenha){
        let listaUser = JSON.parse(localStorage.getItem("listaUser") && "[]")

        listaUser.push(

            {
                nomeCad: fistname.value,
                sobrenomeCad: lasttname.value,
                emailCad: email.value,
                numberCad: number.value, 
                senhaCad: password.value,
                 
            }
        )
        
localStorage.setItem("listaUser", JSON.stringify(listaUser))


        msgSuccess.setAttribute("style", "display: block")
        msgSuccess.innerHTML = "<strong>Cadastrando usuário...</strong>"
        msgError.innerHTML = ""
        msgError.setAttribute("style", "display: none")
            window.location.href = "LOGIN"
    
    }
    else {
        msgError.setAttribute("style", "display: none")
        msgError.innerHTML = "<strong>Preencha todos os campos</strong>"
        msgSuccess.innerHTML = ""
        msgSuccess.setAttribute("style", "display: none")
    }   
}



btn.addEventListener("click", ()=>{
    let inputSenha = document.querySelector("#senha")

    if(inputSenha.getAttribute("type") == "password"){
        inputSenha.getAttribute("type", "password") 
    }

    else {
        inputSenha.setAttribute("type", "password")
    }
})


function cadastrar()
{
    alert("botão clicado")
}