function validarTriangulo() {
  var respostaInterface='';
  var resposta = document.getElementById("resposta");
  var a = parseInt(document.getElementById("lado-a").value);
  var b = parseInt(document.getElementById("lado-b").value);
  var c = parseInt(document.getElementById("lado-c").value);

  console.log('lado a:' +a);
  console.log('lado b:' +b);
  console.log('lado c:' +c);


  if (a < (b + c) && b < (a + c) && c < (a + b)) {

    if (a == b && b == c) {
      console.log('Triângulo equilátero');
      respostaInterface += "Triângulo equilátero"+"<br />";
    }
    else if (a == b || a == c || c == b) {
      console.log('Triângulo isóceles');
      respostaInterface += "Triângulo isóceles"+"<br />";
    }
    else {
      console.log('Triângulo escaleno');
      respostaInterface += "Triângulo escaleno"+"<br />";
    }
  }
  else {
    console.log('Não é triangulo!');
    respostaInterface += "Não é triângulo"+"<br />";
  }

    resposta.innerHTML = respostaInterface;
    
  }
