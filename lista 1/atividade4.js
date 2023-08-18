/* Crie um programa que solicite ao usuário o raio de um círculo por meio de ‘prompt’. Em
seguida, calcule e exiba a área do círculo utilizando ‘console.info’. Formate a mensagem para
incluir um link que redirecione para um site com a fórmula da área do círculo. */ 


var r = prompt("Informe o raio do círculo")
r = r*r
var area = 3*r
console.info(" A área é %d %o",area, "https://www.todamateria.com.br/area-do-circulo/" )