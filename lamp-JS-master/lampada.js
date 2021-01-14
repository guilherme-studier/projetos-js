//declaração das variáveis

var lampada = document.getElementById('lamp')
var turnOn = document.getElementById('turnOn')
var turnOff = document.getElementById('turnOff')


//funções

function lampOn(){
    lampada.src = "./img/ligada.jpg"
}

function lampOff(){
    lampada.src = "./img/desligada.jpg"
}

function lampBroken(){
    lampada.src = "./img/quebrada.jpg"
}


//chamadas das funções
turnOn.addEventListener('click', lampOn)

turnOff.addEventListener('click', lampOff)

lampada.addEventListener('dblclick', lampBroken)