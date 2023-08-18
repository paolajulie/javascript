/* Crie um programa que simule um jogo de dados. Peça ao usuário para lançar o dado (gerar
um número aleatório de 1 a 6) e exiba o resultado no console. Repita até que o usuário
decida parar de jogar. */


var resposta = prompt("Lançar dado? (Digite 1 se sim ou 0 para sair)")
var sortear = function (max) {
  return Math.floor(Math.random() * max);
}

while(resposta == 1){
   resposta = prompt("Lançar novamente? (Digite 1 se sim ou 0 para sair)")
  console.log("O número sorteado foi ",sortear(6)+1); 

}
    