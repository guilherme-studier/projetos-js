    //declarando variáveis

    const calcular = document.getElementById('calcular');

    function calcularImc(){

      var nome = document.getElementById('nome').value;
      var altura = document.getElementById('altura').value;
      var peso = document.getElementById('peso').value;
      var resultado = document.getElementById('resultado');

      var valorImc = (peso / (altura * altura)).toFixed(1)

      
      if (valorImc < 18.5){
        var classificacao = 'abaixo do peso.';
    }else if (valorImc < 25) {
        var classificacao = 'com peso ideal. Parabéns!!!';
    }else if (valorImc < 30){
        var classificacao = 'levemente acima do peso.';
    }else if (valorImc < 35){
        var classificacao = 'com obesidade grau I.';
    }else if (valorImc < 40){
        var classificacao = 'com obesidade grau II';
    }else {
        var classificacao = 'com obesidade grau III. Cuidado!!';
    }
        
        resultado.textContent = 'o resultado do imc de ' + nome + ' é ' + valorImc + ', portanto ' + classificacao;
    }

    calcular.addEventListener('click', calcularImc)