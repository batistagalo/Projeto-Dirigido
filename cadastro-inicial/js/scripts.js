
let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

let email = document.querySelector('#email')
let nome = document.querySelector('#name')
let sobrenome = document.querySelector('#lastname')
let senha = document.querySelector('#password')
let senhaconfirmada = document.querySelector('#passconfirmation')
// let checkBox = documetnt.querySelector('agreement')

// Função para cadastro
function conferirsenha (){
  const senha = document.querySelector("#password");
  const confirmacaodesenha = document.querySelector("#passconfirmation");

  if ((confirmacaodesenha.value === senha.value)) {
    let listaDeUsuarios = JSON.parse(localStorage.getItem('listaDeUsuarios') || '[]')
    listaDeUsuarios.push(
      {
        emailCadastrado: email.value,
        nomeCadastrado: nome.value,
        sobrenomeCadastrado: sobrenome.value,
        senhaCadastrada: senha.value
      }
    )
    localStorage.setItem('listaDeUsuarios', JSON.stringify(listaDeUsuarios))
    
    confirmacaodesenha.setCustomValidity('');
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário </strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''


    setTimeout(()=>{
      window.location.href='file:///C:/Users/Marina/OneDrive/Desktop/Visual%20%20Studio/login/index.html'
    }, 5000)
    
  }else{
    confirmacaodesenha.setCustomValidity('As senhas não conferem');
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Preencha todos os campos corretamente'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}