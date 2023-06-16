let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
  let txtNome = document.querySelector('#txt-nome')
  if(nome.value.length < 3) {
    txtNome.innerHTML = "Nome inválido"
    txtNome.style.color = 'red'
  } else {
    txtNome.innerHTML = "Nome válido!"
    txtNome.style.color = 'green'
  }
}

function validaEmail() {
  let txtEmail = document.querySelector('#txt-email')
  if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    txtEmail.innerHTML = "Email inválido"
    txtEmail.style.color = 'red'
  } else {
    txtEmail.innerHTML = "Email válido!"
    txtEmail.style.color = 'green'
  }
}

