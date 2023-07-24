var tela = document.getElementById('tela');
var limpar = document.getElementById('limpar');
var soma = document.getElementById('soma');
var sub = document.getElementById('sub');
var div = document.getElementById('div');
var mult = document.getElementById('mult');
var igual = document.getElementById('re');

// Função para limpar a tela
limpar.addEventListener('click', function() {
    tela.value = '';
});

// Evento de clique nos botões numéricos
var numeros = document.getElementsByClassName('num');
for (var i = 0; i < numeros.length; i++) {
    numeros[i].addEventListener('click', function() {
        tela.value += this.textContent;
    });
}

// Evento de clique no botão de soma
soma.addEventListener('click', function() {
    tela.value += ' + ';
});

sub.addEventListener('click', function(){
    tela.value+=' - ';
})

div.addEventListener('click', function(){
    tela.value+=' / ';
})

mult.addEventListener('click', function(){
    tela.value+=' * ';
})

// Evento de clique no botão igual para calcular o resultado
igual.addEventListener('click', function() {
    try {
        var expressao = tela.value;
        var resultado = calcularResultado(expressao);
        tela.value = resultado;
    } catch (error) {
        tela.value = 'Erro';
    }
});

// Função para calcular o resultado da expressão
function calcularResultado(expressao) {
    var partes = expressao.split(' ');
    var operador = partes[1];
    var num1 = parseFloat(partes[0]);
    var num2 = parseFloat(partes[2]);

    if (operador === '+') {
        return num1 + num2;
    } else if (operador === '-') {
        return num1 - num2;
    } else if (operador === '*') {
        return num1 * num2;
    } else if (operador === '/') {
        if (num2 === 0) {
            throw new Error('Divisão por zero não é permitida.');
        }
        return num1 / num2;
    }
}