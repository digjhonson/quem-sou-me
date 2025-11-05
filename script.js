//inicializando o emailjs com um token (public key)
emailjs.init(window.env.EMAIL_PUBLIC_KEY);
//função para enviar o formulario por email
function enviarFormulario(e){
//impede a pagina de recarregar quando o formulario for enviado
    e.preventDefault();
//pegando os campos do formulario por ID e armazenando em variaveis
let nome = document.getElementById("nome").value;
let email= document.getElementById("email").value;
let mensagem =document.getElementById("mensagem").value;
let resposta = document.getElementById("resposta");
let form = document.getElementById ("form");
// envia o email usado o:
// service_id
//template_id
//campos do email 
emailjs.send(window.env.EMAIL_SERVICE_ID, window.env.EMAIL_TEMPLATE_ID_ADMIN,{
nome: nome,
email: email,
mensagem: mensagem
});


emailjs.send(window.env.EMAIL_SERVICE_ID, window.env.EMAIL_TEMPLATE_ID_REPLY,{
  nome:nome,
  email: email
});
//alert:('sua mensagem foi enviada com sucesso aguarde nosso retorno!');

//inserir dentro do paragrafo (html) o texto apos enviar a mensagem
resposta.innerHTML= "Sua mensagem foi enviada! Aguarde nosso contato!";
//limpa os campos do formulario
form.reset(); 

}