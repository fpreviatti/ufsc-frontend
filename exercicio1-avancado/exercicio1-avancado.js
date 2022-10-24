function validaValores(){

    var valorMinimo = parseInt(document.getElementById("valor-min").value);
    var valorMaximo = parseInt(document.getElementById("valor-max").value);
  
    if(valorMaximo<valorMinimo){
      alert('Valor máximo menor que valor mínimo');
    }
  
  }
  
  function multiplos(){

        console.log('valor minimo' +document.getElementById("valor-min").value);
        console.log('valor maximo' +document.getElementById("valor-max").value);

        if(document.getElementById("valor-min").value=='' || document.getElementById("valor-max").value==''){
            alert('Favor informar o valor mínimo e o valor máximo');
        }

        else{

            var valorMinimo = parseInt(document.getElementById("valor-min").value);
            var valorMaximo = parseInt(document.getElementById("valor-max").value);
        var resposta = document.getElementById('resposta');
        var totalMultiplos=0;


        for(var x=valorMinimo; x<=valorMaximo ; x++){
  
            if(x%2==0 || x%3==0){
              console.log(x +'é múltiplo de 2 ou 3');
              totalMultiplos=totalMultiplos+1;
            }
            
          }
           
          resposta.innerHTML = ('Entre o valor mínimo ')+valorMinimo+(' e o valor máximo ')+valorMaximo+(' há ')+totalMultiplos+( ' múltiplos de 2 ou 3');


        }

        
  }