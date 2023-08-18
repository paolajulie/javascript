/* Crie um objeto chamado "calculadora" com métodos para adição, subtração, multiplicação e
divisão. Em seguida, use esses métodos para calcular e imprimir o resultado de uma
operação matemática no console. */

const calculadora = {
   adicao: function(a,b){
    return a + b;
   },

   subtracao: function(a, b) {
    return a - b;
  },

   multiplicacao: function(a, b) {
    return a * b;
  },

   divisao: function(a, b) {
    if (b === 0) {
      return "Divisão por zero não é possível.";
    }
    return a / b;
  }


}

const numero1 = 12;
const numero2 = 24;


console.log("Adição: " + numero1 + " + " + numero2 + " = " + calculadora.adicao(numero1, numero2));
console.log("Subtração: " + numero1 + " - " + numero2 + " = " + calculadora.subtracao(numero1, numero2));
console.log("Multiplicação: " + numero1 + " * " + numero2 + " = " + calculadora.multiplicacao(numero1, numero2));
console.log("Divisão: " + numero1 + " / " + numero2 + " = " + calculadora.divisao(numero1, numero2));
