
const element = document.getElementById("botao-login");
element.addEventListener("click", inicio);

const element2 = document.getElementById("botao-criar");
element2.addEventListener("click", cadastro);

const element3 = document.getElementById("botao-cadastro");
element3.addEventListener("click", criarUsuario);


const USUARIOS_KEY = 'usuarios';

var usuarios = [];
var usuario = '';

function initializeWebStorage(){

  if (localStorage.getItem(USUARIOS_KEY) != null) {
    return;
  }

  else{
    localStorage.setItem(USUARIOS_KEY, JSON.stringify([]));
  }
}


function inicio(){

  initializeWebStorage();

  login();

}

class Usuario {

  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
    
  }

}


function criarUsuario(){

  initializeWebStorage();

  let emailRecuperado = document.getElementById("email").value;
  let senhaRecuperada = document.getElementById("senha").value;

  this.usuario = new Usuario(emailRecuperado,senhaRecuperada);

  if(isExist(emailRecuperado)){
    alert('Usuário já cadastrado');
  }


  else{
    this.usuarios = JSON.parse(localStorage.getItem(USUARIOS_KEY));

    this.usuarios.push(this.usuario);
  
    localStorage.setItem(USUARIOS_KEY, JSON.stringify(this.usuarios));
  }

  
}

function cadastro(){

  var titulo = document.getElementById("span-titulo");

  titulo.innerHTML = 'Faça seu cadastro!';

  element.style = 'display: none';

  element3.style = 'display: inline';


  var spanConta = document.getElementById('span-conta');

  spanConta.innerHTML = 'Já possui conta? Faça seu login!';

  var botao = document.getElementById('botao-criar');

  botao.innerHTML = 'Login';

  botao.addEventListener("click", function(){
    document.location.href = 'exercicio6-avancado.html';
});

}

function login(){

  let emailRecuperado = document.getElementById("email").value;
  let senhaRecuperada = document.getElementById("senha").value;

  this.usuarios = JSON.parse(localStorage.getItem(USUARIOS_KEY));

  this.usuario = buscaUsuario(emailRecuperado);

  if(this.usuario==null){
    alert('Usuário não encontrado');
    return;
  }

  else if(this.usuario.senha !=senhaRecuperada){

    alert('Senha incorreta');
    return;

  }

  var resposta = document.getElementById("div-login-id");
  resposta.innerHTML = '';

  var tituloBemVindo = document.createElement("h2");

  var hrefDeslogar = document.createElement("a");

  hrefDeslogar.href = '/exercicio6-avancado/exercicio6-avancado.html';

  hrefDeslogar.innerHTML = "Deslogar";

  tituloBemVindo.innerHTML = 'Bem Vindo : ' +this.usuario.email;

  document.body.appendChild(tituloBemVindo);

  document.body.appendChild(hrefDeslogar);

}

function buscaUsuario(email){
  
  for (let u of this.usuarios) {
    if (u.email.valueOf() == email.valueOf()) {
      return u;
    }
  }
  return null;
}

function isExist(email){
  
  for (let u of this.usuarios) {
    if (u.email?.valueOf() == email?.valueOf()) {
      return true;
    }
  }
  return false;
}

