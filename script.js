//CRIAÇÃO DO FORM 
const form = document.createElement('form');
document.body.appendChild(form);

// CAPTURA O FORM 
const $form = document.querySelector('form');

//FUNÇÃO PARA CRIAR OS FILHOS DO FORM
const formChild = son => $form.appendChild(son);

// const create = document.createElement();

// CRIAÇÃO DO TITULO
const title = document.createElement('h1');
formChild(title)
title.innerText = 'Cadastro'


//CRIAÇÃO DOS INPUTS
//TODO: add o atributo required nos inputs
//email
const email = document.createElement('input');
email.setAttribute('placeholder', 'Digite seu email');
email.setAttribute('type', 'email');
formChild(email);
//senha
const password = document.createElement('input')
password.setAttribute('placeholder', 'Digite sua senha');
password.setAttribute('type', 'password');
formChild(password);
//confirmar senha
const passwordConfirm = document.createElement('input')
passwordConfirm.setAttribute('placeholder', 'Confirme sua senha');
passwordConfirm.setAttribute('type', 'password');
formChild(passwordConfirm);
//botão enviar
const sendButton = document.createElement('button');
sendButton.setAttribute('type', 'submit');
sendButton.innerText = 'Enviar';
formChild(sendButton);
//botão cancelar
const cancelButton = document.createElement('button');
cancelButton.setAttribute('type', 'reset');
cancelButton.innerText = 'Cancelar';
formChild(cancelButton);


//Construa esses inputs de uma forma que quando forem preenchidos com algum conteúdo, os campos receberão a propriedade “disabled”
//mas quando o mouse estiver acima desse campo ele vai perder essa propriedade possibilitando a modificação do conteúdo pelo usuário.
//Quando o mouse sair do input e o mesmo tiver preenchido, ele receberá a propriedade disabled novamente.

//captura todos os inputs
const inputs = document.querySelectorAll('input');

//evento ativado quando houver uma mudança no form
form.addEventListener('change', () => { desabilitarInputs() });

//função para desabilitar os inputs se estiverem preenchidos
const desabilitarInputs = () => {
    inputs.forEach(element => {
        if (element.value != '') {
            element.setAttribute('disabled', true)
        }
    })
}

//função para habilitar o input quando clicado e desabilitar os demais
email.addEventListener('pointerdown', () => {
    desabilitarInputs();
    email.removeAttribute('disabled')
})

password.addEventListener('pointerdown', () => {
    desabilitarInputs();
    password.removeAttribute('disabled')
})

passwordConfirm.addEventListener('pointerdown', () => {
    desabilitarInputs();
    passwordConfirm.removeAttribute('disabled')
})


//add a verificação das senhas ao clicar em enviar
sendButton.addEventListener('click', (event)=>{
    if(password.value != passwordConfirm.value){
        event.preventDefault(alert('As senhas não coincidem'));
    }
})

//add prevant default no botão cancelar
cancelButton.addEventListener('click', event => {
    event.preventDefault(confirm('Tem certeza que deseja resetar os dados inseridos ?'))
})

// verifica se os inputs preenchidos estão desativados
document.body.addEventListener('mouseover', ()=> {desabilitarInputs} )