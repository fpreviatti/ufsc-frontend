const element = document.getElementById("botao-relatorio");
element.addEventListener("click", relatorio);

class Aluno {

  constructor(numero, nota = Symbol()) {
    this._numero = numero;
    this._nota = nota;
  }

  get numero() {
    return this._numero;
  }

  get nota() {
    return this._nota;
  }
}

function relatorio() {
 
  let alunos = [];
  let countAprovados =0;
  let countReprovados =0;
  let totalAlunos = 20;

  for(let i=0; i<20;i++){
    alunos[i] = new Aluno(i,Math.floor(Math.random() * 101));

    if(alunos[i].nota<70){
      alunos[i].situacao = 'reprovado';
      countReprovados++;
    }
    else{
      alunos[i].situacao = 'aprovado';
      countAprovados++;
    }
  }

  let table = document.querySelector("table");
  table.innerHTML="";
  data = Object.keys(alunos[0]);
  generateTableHead(table);
  generateTable(table, alunos);
  generateTableFooter(countAprovados,countReprovados,totalAlunos);
}

function generateTableHead(table) {
  let thead = table.createTHead();
  let row = thead.insertRow();

  document.getElementById('tabela-id').createCaption().innerHTML = 'Relatório de notas de alunos da disciplina de Javascript';
 
    let thNumero = document.createElement("th");
    let thNota = document.createElement("th");
    let thSituacao = document.createElement("th");

    let numero = document.createTextNode('Numero');
    let nota = document.createTextNode('Nota');
    let situacao = document.createTextNode('Situação');
    
    thNumero.appendChild(numero);
    thNota.appendChild(nota);
    thSituacao.appendChild(situacao);

    row.appendChild(thNumero);
    row.appendChild(thNota);
    row.appendChild(thSituacao);
  
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function generateTableFooter(aprovados,reprovados,totalAlunos){
  
  var table = document.getElementById('tabela-id');
  var footer = table.createTFoot();
  var row = footer.insertRow(0);
  var cell = row.insertCell(0);
  var cell2 = row.insertCell(1);

  cell.innerHTML = "<b>APROVADOS: </b>" +aprovados +' ('+(aprovados*100)/totalAlunos +'%' +')';
  cell2.innerHTML = "<b>REPROVADOS: </b>" +reprovados +' ('+(reprovados*100)/totalAlunos +'%' +')';

}
