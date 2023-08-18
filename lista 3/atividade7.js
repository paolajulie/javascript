/* Crie uma função que receba um array de números como parâmetro e retorne true se todos
os elementos do array forem números pares, caso contrário, retorne false. */

function funcao(array) {
    const numerosPares = array.filter(function(numero) {
      return numero % 2 === 0; 
    });
  
    return numerosPares.length === array.length; 
  }
  
  const numeros1 = [2, 4, 6, 8, 10];
  console.log(funcao(numeros1)); 
  
  const numeros2 = [2, 4, 7, 8, 10];
  console.log(funcao(numeros2)); 

  const numeros3 = [1, 3, 5, 7, 9];
  console.log(funcao(numeros3)); 


  