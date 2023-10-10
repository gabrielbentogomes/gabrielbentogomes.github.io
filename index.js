const math = require('mathjs');

function adicionarTexto(texto) {
    var campoTexto = document.getElementById('text');
    campoTexto.value += texto;

}

function limpar() {
    var campoTexto = document.getElementById('text');
    campoTexto.value = '';
}


function calcular() {
    var campoTexto = document.getElementById('text');
    var expressao = campoTexto.value;

    // Inicialize uma variável para armazenar o resultado
    var resultado = 0;

    // Inicialize uma variável para armazenar o operador atual
    var operador = '+';

    // Inicialize uma variável para armazenar o número atual
    var numero = '';

    // Percorra cada caractere na expressão
    for (var i = 0; i < expressao.length; i++) {
        var caractere = expressao[i];

        // Se o caractere for um dígito, concatene-o ao número atual
        if (!isNaN(caractere) || caractere === '.') {
            numero += caractere;
        } else {
            // Caso contrário, calcule o resultado com base no operador atual e número
            numero = parseFloat(numero);
            if (operador === '+') {
                resultado += numero;
            } else if (operador === '-') {
                resultado -= numero;
            } else if (operador === 'x') {
                resultado *= numero;
            } else if (operador === '÷') {
                resultado /= numero;
            }

            // Atualize o operador e redefina o número
            operador = caractere;
            numero = '';
        }
    }

    // Calcule o último resultado com base no operador final e número
    numero = parseFloat(numero);
    if (operador === '+') {
        resultado += numero;
    } else if (operador === '-') {
        resultado -= numero;
    } else if (operador === 'x') {
        resultado *= numero;
    } else if (operador === '÷') {
        resultado /= numero;
    }

    // Defina o valor do campo de texto com o resultado
    campoTexto.value = resultado;
}
