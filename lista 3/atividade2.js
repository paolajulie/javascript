/* Crie uma função que receba o nome de um aluno e suas notas em três disciplinas diferentes.
Em seguida, calcule a média das notas e retorne uma mensagem usando template strings,
informando o nome do aluno, suas notas e a média calculada */

function media(){
var nome = prompt("Digete seu nome:")
var notas = prompt("Digite suas três notas separadas por vírgulas").split(",");
    var n1 = parseFloat(notas[0]);
    var n2 = parseFloat(notas[1]);
    var n3 = parseFloat(notas[2]);
var mediafinal = parseInt( (n1 + n2 + n3) / 3 ) 

return`Olá ${nome} suas notas são  ${notas} e sua média é ${mediafinal}`
}
console.log(media())