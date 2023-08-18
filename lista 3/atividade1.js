/* Crie uma função que receba o nome e a idade de uma pessoa e retorne uma mensagem
formatada usando template strings informando o nome e a idade da pessoa */
  

function funcao(){
    var nome = prompt("Digite seu nome:")
    var idade = prompt("Digite sua idade:")

    return `Olá ${nome} sua idade é ${idade}`

}

console.log(funcao())