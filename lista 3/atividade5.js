/* Crie uma função que receba um array de números como parâmetro e retorne o maior
elemento do array */

 

function funcao(array) {
    let maior = array[0]; 
  
    array.forEach(function(numero) {
      if (numero > maior) {
        maior = numero; 
      }
    });
  
    return maior;
  }
  
  const numeros = [10, 5, 27, 8, 15, 3, 20];
  const maiorNumero = funcao(numeros);
  console.log(`O maior número é: ${maiorNumero}`);
  