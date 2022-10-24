function gerar() {
  var respostaInterface='';
  var resposta = document.getElementById("resposta");
  var valorMinimo = parseInt(document.getElementById("valor-min").value);
  var valorMaximo = parseInt(document.getElementById("valor-max").value);
  var tamanhoArray = parseInt(document.getElementById("quantidade").value);

  let arrayNumeros = [];

  if((tamanhoArray>(valorMinimo+valorMaximo))){
    alert('quantidade de números deve ser menor que a soma de valor mínimo e valor máximo');
  }

  else{

    for(let i=0; i<tamanhoArray;i++){

      min = Math.ceil(valorMaximo);
      max = Math.floor(valorMinimo);
  
      arrayNumeros[i] = Math.floor(Math.random() * (max - min) + min)

      respostaInterface += "Posição do array: " +i+ " Valor: "+ arrayNumeros[i]+"<br />";
  
    }
  
    for(let i=0;i<arrayNumeros.length;i++){
      console.log(arrayNumeros[i]);
    }

    resposta.innerHTML = respostaInterface;
    
  }

}