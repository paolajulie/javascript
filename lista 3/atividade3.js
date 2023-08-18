/* a) Utilize a desestruturação para extrair as propriedades nome, idade e email do objeto usuario
e armazená-las em variáveis separadas.
b) Em seguida, utilize a desestruturação para extrair as propriedades cidade, estado e pais do
objeto endereco e armazená-las em variáveis separadas.
 */

const usuario = {
 nome: 'Maria',
 idade: 28 ,
 email: 'maria@example@gmail.com',
 endereco: {
    cidade: 'Sao Paulo',
    estado: 'SP',
    pais: 'Brasil'
 }

};

const { nome, idade, email } = usuario;

console.log(nome);   
console.log(idade);  
console.log(email);



const { endereco: { cidade, estado, pais } } = usuario;

console.log(cidade);  
console.log(estado);  
console.log(pais); 


