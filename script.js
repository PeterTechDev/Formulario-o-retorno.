//CRIAÇÃO DO FORM 
const form = document.createElement('form');
document.body.appendChild(form);

//FUNÇÃO PARA CRIAR OS FILHOS DO FORM
formChild = son => form.appendChild(son);

// CRIAÇÃO DO TITULO
const title = document.createElement('h1');
formChild(title)
title.innerText = 'Cadastro'

//CRIAÇÃO DOS INPUTS (3) E SEUS ATRIBUTOS 
//TODO: add o atributo required nos inputs
//email
const email = document.createElement('input');
email.setAttribute('placeholder', 'Digite seu email');
email.setAttribute('type', 'email');
email.setAttribute('required', '');
formChild(email); /* invocando função da linha 6 */
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

//--------------------------------------------------------------------------//
//Construa esses inputs de uma forma que quando forem preenchidos com algum conteúdo, os campos receberão a propriedade “disabled”
//mas quando o mouse estiver acima desse campo ele vai perder essa propriedade possibilitando a modificação do conteúdo pelo usuário.
//Quando o mouse sair do input e o mesmo tiver preenchido, ele receberá a propriedade disabled novamente.

//captura todos os inputs em uma lista
const inputs = document.querySelectorAll('input');

//função para desabilitar os inputs se estiverem preenchidos
desabilitarInputs = () => {
    inputs.forEach(element => {
        if (element.value != '') {
            element.setAttribute('disabled', true);
        }
    })
}

//evento dispara quando houver uma mudança no form e invoca a função para desabilitar os inputs - linha 51
form.addEventListener('change', () => { desabilitarInputs() });

//função para habilitar o input quando clicado e desabilitar os demais
habilitar = element => {
    desabilitarInputs();
    element.removeAttribute('disabled')
}

<<<<<<< HEAD
=======
// evento verificação e desabilitar o input após o mouse sair da area
form.addEventListener('mouseout', ()=> desabilitarInputs())

>>>>>>> 9384e102786538f433ac6a5cac7e58ea73154f8b
//add os eventos para invocar a função habilitar quando clicar no elemento
email.addEventListener('pointerdown', ()=>habilitar(email))
password.addEventListener('pointerdown', ()=>habilitar(password))
passwordConfirm.addEventListener('pointerdown', ()=>habilitar(passwordConfirm))

//add a verificação das senhas ao clicar em enviar
sendButton.addEventListener('click', event =>{
    if(password.value != passwordConfirm.value)
    event.preventDefault(alert('As senhas não coincidem'));
})

<<<<<<< HEAD
//verifica email válido
=======
//verifica se email é válido
>>>>>>> 9384e102786538f433ac6a5cac7e58ea73154f8b
sendButton.addEventListener('click', event =>{
   email.value.includes('@') || email.value.includes('.com')? console.log('email ok'): alert('Favor insira um email válido')
       event.preventDefault()
})

//add prevant default no botão cancelar
cancelButton.addEventListener('click', event => {
    const confirmation = confirm('Tem certeza que deseja resetar os dados inseridos ?')
    if(confirmation != true) event.preventDefault()
})
