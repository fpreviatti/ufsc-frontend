const element = document.getElementById("botao-login");
element.addEventListener("click", inicio);

USUARIOS_KEY = 'usuarios';

var usuarios;
var usuario;

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

  //login();

  cadastro();

}

class Usuario {

  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
    
  }

}

function cadastro(){

  let emailRecuperado = document.getElementById("email").value;
  let senhaRecuperada = document.getElementById("senha").value;

  this.usuario = new Usuario(emailRecuperado,senhaRecuperada);
  this.usuarios = JSON.parse(localStorage.getItem(USUARIOS_KEY));

  if(isExist(emailRecuperado)){
    alert('Já existe este e-mail cadastrado');
  }

  else{

    this.usuarios.push(usuario);
    localStorage.setItem(USUARIOS_KEY, JSON.stringify(this.usuarios));

  }

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

  //alert('Bem vindo!');

  var resposta = document.getElementById("div-login-id");
  resposta.innerHTML = '';

}

function buscaUsuario(email){
  
  for (let u of this.usuarios) {
    if (u.email?.valueOf() == email?.valueOf()) {
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

function usuariosCadastrados(){

    this.usuarios = localStorage.get(USUARIOS_KEY);
    return this.usuarios;

}
