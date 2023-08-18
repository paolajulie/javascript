/* Crie um programa que gere uma senha aleatória com uma combinação de letras maiúsculas,
minúsculas, números e caracteres especiais. Peça ao usuário para escolher o tamanho da
senha. */

var tamanho = prompt("Qual será o tamanho de sua senha?");

function gerador() {
    var caracteres = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
    var senha = "";
    for (var i = 0; i < tamanho; i++) {
      var randomNumber = Math.floor(Math.random() * caracteres.length);
      senha += caracteres.substring(randomNumber, randomNumber + 1);
    } 
    return senha ;
  }

  var senhaGerada = gerador();
  console.log(senhaGerada);
  