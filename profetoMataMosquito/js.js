var altura = 0
var largura = 0

var vidas = 1

function ajustaTamanho(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura )
}

ajustaTamanho()

function posicaoRandomica(){

    //remover o anterior caso ele exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        console.log('o elemento selecionado foi: v' + vidas)
       document.getElementById('v' + vidas).src = "./imagens/img/coracao_vazio.png"

       vidas++
    }

    var posicaoX = Math.floor(Math.random()* largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criando o elemento html

    var mosquito = document.createElement('img')
    mosquito.src = './imagens/img/mosca.png'
    mosquito.className = tamanhoRandomico() + ' ' + ladoRandomico()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    
    mosquito.onclick = function(){
        this.remove()

    }

    document.body.appendChild(mosquito)


}

posicaoRandomica()

function tamanhoRandomico(){
    var classe = Math.floor(Math.random() * 3)
    console.log(classe)

    switch(classe){
        case 0:
            return 'mosca1'
            
        case 1:
            return 'mosca2'

        case 2:
            return 'mosca3'
        
            
    }
}

function ladoRandomico(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'
            
        case 1:
            return 'ladoB'
        
    }
}


