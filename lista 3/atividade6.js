/* Crie uma função que receba um array de números como parâmetro e retorne um novo array
sem elementos duplicados. */

function funcao(array){
    const novoArr = []

    for (let i = 0; i < array.length; i++) {
        if (novoArr.indexOf(array[i]) === -1) {
          novoArr.push(array[i]);
        }
      }
    
      return novoArr;

}

const numeros = [ 1, 2, 3, 3, 4 , 5 , 6, 7 , 8, 8, 8, 9, 10]
console.log(funcao(numeros))