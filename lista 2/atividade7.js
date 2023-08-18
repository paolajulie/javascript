/* Crie uma calculadora que solicite ao usuário o peso e a altura e calcule o IMC. Exiba a
categoria do IMC (abaixo do peso, peso normal, sobrepeso, etc.) usando condicionais.
 */



let altura = parseFloat(prompt("Digite sua altura em m (Ex: 1.75)"))
let peso = parseFloat(prompt ("Informe seu peso em kg"))

var imc = peso / (altura*altura) ;
console.log(imc)

if (imc < 18.5){
 alert("Você está abaixo do peso ")
}

else if(imc >= 18.5 && imc < 24.9){
    alert("Peso normal")
}

else{
    alert("Sobrepeso" + imc)
}