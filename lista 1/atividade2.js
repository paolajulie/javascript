/* Crie um programa que solicite dois números ao usuário por meio de ‘prompt’. Em seguida,
calcule a soma dos dois números e exiba o resultado no console utilizando ‘console.info’ com
a seguinte mensagem “{valor 1} + {valor 2} é igual a {resultado}” onde o resultado deve estar
em negrito. */



var n1=prompt("digite um numero")
var n2=prompt("digite outro numero")
n1 = parseInt(n1,10)
n2 = parseInt(n2,10)
var n3 = n1 + n2
console.info("%d + %d é igual a %c%d", n1, n2, "font-weight: bold",n3)