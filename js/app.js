//Criação do formulário:

const formulario = document.createElement("form");
formulario.setAttribute('class', 'formulario');
document.body.appendChild(formulario);

//Seleção do formulário:

const form = document.querySelector(".formulario");

//Inserção do Título:

const titulo = document.createElement("h1");
const tituloText = document.createTextNode("Login");

titulo.appendChild(tituloText);
form.appendChild(titulo);

//Inserção dos inputs:

const email = document.createElement("input");
email.setAttribute("placeholder", "Email");
email.setAttribute("type", "email");
form.appendChild(email);

const senha = document.createElement("input");
senha.setAttribute("placeholder", "Senha");
senha.setAttribute("type", "password");
form.appendChild(senha);

//Inserção dos botões:

const botaoEnviar = document.createElement("button");
const botaoTextoEnviar = document.createTextNode("Enviar");
botaoEnviar.setAttribute("type", "submit");
botaoEnviar.appendChild(botaoTextoEnviar);
form.appendChild(botaoEnviar);

const botaoCancelar = document.createElement("button");
const botaoTextoCancelar = document.createTextNode("Cancelar");
botaoCancelar.setAttribute("type", "reset");
botaoCancelar.appendChild(botaoTextoCancelar);
form.appendChild(botaoCancelar);

//Manipulação de atributos:

//email.setAttribute("disabled", true);

//Remoção do atributo:

email.removeAttribute("placeholder");

//Sugestão de estilização:

formulario.style.display = "flex";
formulario.style.maxWidth = "300px";
formulario.style.margin = "10% auto";
formulario.style.textAlign = "center";
formulario.style.flexDirection = "column";

// Carregamento da tela
window.onload = alert("ok")

//Cancela o envio
botaoCancelar.onclick = function() {
    confirm("Você têm certeza de que deseja cancelar o envio?")
}

//Cancela a ação reset padrão do botão 
botaoEnviar.addEventListener('click', function(event) {
    //Verifica se o campo email está vazio
    event.preventDefault()
    // if (document.querySelector("input").value == "") {
    //     console.log(document.querySelector("input").value);
    //     event.preventDefault();
    //     alert("O campo e-mail é obrigatório.");
    // }
});

//Verifica se o mouse passou por cima do elemento ("Vai comprar?")
botaoEnviar.addEventListener('mouseover', function(event) {
    if (document.querySelector("input").hasAttribute("type")) {
        console.log(document.querySelector("input"));
        event.preventDefault();
        //alert("O campo e-mail é obrigatório.");
    }
});

//Verificar senha
senha.addEventListener('keydown', function(event) {
    if (event.key == "g") {
        alert("Digite qualquer outra tecla")
        event.preventDefault()
    }
});

//mudar a cor do h1
titulo.addEventListener('mousehover',()=>titulo.style.color = "blue")

//adicionar contador
let contador = 0;
let inputText = "";
const p = document.createElement('p');
form.append(p);

email.addEventListener('keyup', ()=>{s
    contador ++
    p.innerHTML = `<br> Foram adicionados ${contador} vezes`
     email.value + "<br> Vezes que o teclado foi utilizado "
    + contador
})