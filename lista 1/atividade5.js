/* Crie uma função que receba um valor em dólares como parâmetro e converta esse valor para
reais. Solicite ao usuário um valor em dólares por meio de ‘prompt’ e exiba o resultado
utilizando ‘alert’ */


var reais = parseFloat(prompt("Indique o valor em reais"))

function cambio() {
 var dolar = reais * 4.73
 return dolar.toFixed(2)
}

alert(cambio())