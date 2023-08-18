/*Peça ao usuário para digitar uma palavra e conte quantas vogais (A, E, I, O, U) existem na
palavra. Exiba o resultado no console. */

const palavra = prompt("Digite uma palavra:");


function contar(texto) {
  const vogais = ['A', 'E', 'I', 'O', 'U'];
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if (vogais.includes(texto[i].toUpperCase())) {
      contador++;
    }
  }

  return contador;
}


const numeroVogais = contar(palavra);

console.log("A palavra \"" + palavra + "\" tem " + numeroVogais + " vogais.");
