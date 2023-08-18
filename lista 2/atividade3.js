/* Crie uma função que converta uma temperatura de Celsius para Fahrenheit ou vice-versa,
dependendo da escolha do usuário. Exiba o resultado no console. */

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  

function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    return celsius;
  }


var celsius , fahrenheit
var escolha = prompt("Insira 1 para conversão de Celsius para Fahrenheit ou 2 para conversão de Fahrenheit para Celsius")

if (escolha == 1){
   celsius = prompt("Insira a temperatura em Celsius")
   console.log( celsius + "°C é igual a " + celsiusToFahrenheit(celsius) + "°F");
}
else{
    fahrenheit = prompt("Insira a temperatura em Fahrenheit")
    console.log( fahrenheit + "°F é igual a " + fahrenheitToCelsius(fahrenheit) + "°C");
}

