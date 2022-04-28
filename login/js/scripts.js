function logar() {
    let email = document.querySelector('#email')
    let emailLabel = document.querySelector('#emailLabel')

    let password = document.querySelector('#password')
    let passwordLabel = document.querySelector('#passwordLabel')

    let msgError = document.querySelector('#msgError')
    let listaDeUsuarios = []

    let userValid = {
        emailCadastrado: '',
        nomeCadastrado: '',
        sobrenomeCadastrado: '',
        senhaCadastrada: ''
    }

    listaDeUsuarios = JSON.parse(localStorage.getItem('listaDeUsuarios'))
    
    listaDeUsuarios.forEach((item) =>{
        if(email.value == item.emailCadastrado && password.value == item.senhaCadastrada){
            userValid = {
                email: item.emailCadastrado,
                senha: item.senhaCadastrada
            }
        }
    })

    if (email.value == userValid.email && password.value == userValid.senha){
        
        // Abrir página de registro de vacina
        window.location.href = 'file:///C:/Users/Marina/OneDrive/Desktop/Visual%20%20Studio/fomulario/index.html'
        
        // Gerar Token por login
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)
        
    }else{
        emailLabel.setAttribute('style', 'color: red')
        email.setAttribute('style', 'border-color: red')
        passwordLabel.setAttribute('style', 'color: red')
        password.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Email ou senha incorretos'
        email.focus()
    }
}