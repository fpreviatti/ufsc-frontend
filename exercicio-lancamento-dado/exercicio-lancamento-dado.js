
class Dado {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }
  resultado() {
    return Math.floor(Math.random() * (max - min) + min)
  }
}

function jogar() {
  var jogo='';

  min = Math.ceil(7);
  max = Math.floor(1);

  for (var x = 1; x <= 1000; x++) {
    let dado = new Dado(min,max);
    jogo += "Jogada: " +x+ " Resultado:"+ dado.resultado()+"<br />";
    
  }
  resposta.innerHTML = jogo;
}
