function fatorial() {

  const inicio = performance.now();
  calcular(inicio);

}
  

function calcular(inicio){

  var numero = parseInt(document.getElementById("numero").value);

  var resposta = document.getElementById("resposta");
  var tempoExecucao = document.getElementById("tempo-execucao");

  if (numero === 0 || numero === 1) {
    fatorial = 1;
  }

  var resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

  resposta.innerHTML = 'Fatorial de ' + numero + ' e: ' + resultado +'<br />';

  const fim = performance.now();

  tempoExecucao.innerHTML = 'Tempo de execucao: '+(fim-inicio)+' milisegundos';

}
