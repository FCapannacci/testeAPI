var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function fizzBuzz(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 5 == 0) {
            console.log('o número ' + numbers[i] + ' eh buzz');
        }
        if (numbers[i] % 3 == 0 && numbers[i] % 5 == 0) {
            console.log('o número ' + numbers[i] + ' eh fizzbuzz');
        }
    }
}
fizzBuzz(numberArray);
//Vale lembrar que todo registro que for um fizzbuzz é também um buzz...

var book = 'este e o conteudo apenas com palavras minusculas e espacos';

var palavras = book.split(' ');
console.log('existem ' + palavras.length + ' palavras nessa frase!');

function soletrando(frase) {
    var letra = ''
    var countLetra = 0;
    var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var resultado = '';
    for (var j = 0; j < alfabeto.length; j++) {
        countLetra = 0;
        letra = alfabeto[j];
        for (var i = 0; i < frase.length; i++) {
            if (frase[i].toLocaleLowerCase() == letra.toLocaleLowerCase()) {
                countLetra++;
            }
        }
        if (countLetra !== 0) {
            resultado = resultado + letra + ':' + countLetra + ', ';
        }
    }
    resultado = resultado.substring(0, resultado.length - 2);
    console.log(resultado);
}
soletrando(book);