/* Crie uma função que receba um array de números como parâmetro e retorne a soma de
todos os elementos do array.
 */

function funcao(array){
    let soma = 0;

    array.forEach(function(numero) {
      soma += numero;
    });
    return soma
}

const numeros = [1, 2 ,3 ,4, 5, 6, 7, 8, 9,]
console.log(`A soma dos números é: ${funcao(numeros)}`);