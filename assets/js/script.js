/*

Case sensitive = Reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Id: getElementByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/


//let nome = window.document.getElementBeyId('nome')
//let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntpOk = false
let mapa = document.querySelector('#mapa')


nome.style.width = '10%'
email.style.width = '10%'

function validaNome()
{
    let txtNome = document.querySelector('#txtNome')
if (nome.value.length < 3){

    txtNome.innerHTML = "Nome inválido!"
    txtNome.style.color = 'red'
    emailOk = true
}
else {
    txtNome.innerHTML = "Nome válido!"
    txtNome.style.color = 'green'
}
}
function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else{

        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk =true
         }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100){
    txtAssunto.innerHTML = 'Esse texo é muito grande, digite no máximo 100 caracteres.'
    txtAssunto.style.color = 'red'
} else {
    txtAssunto.innerHTML = 'Texto válido'
    txtAssunto.style.color = 'green'
    assuntpOk = true
}
}

function enviar (){
    if(nomeOk == true && emailOk == true && assuntpOk == true){
        alert ('Formulário enviado com sucesso!')
    }else{
        alert ('Preenche o formulário corretamente!')
    }
}

function mapaZoom(){
mapa.style.width = '800px'
mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400'
    mapa.style.height = '350px'
}