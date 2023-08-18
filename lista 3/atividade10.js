/* Crie uma função que recebe dois arrays de mesmo tamanho, um contendo chaves e outro
contendo valores. A função deve retornar um objeto Map, onde as chaves são os elementos
do primeiro array e os valores são os elementos correspondentes do segundo array */

function funcao(chaves, valores) {
    
  
    const meuMap = new Map();
  
    for (let i = 0; i < chaves.length; i++) {
      meuMap.set(chaves[i], valores[i]);
    }
  
    return meuMap;
  }
  
  const arrChaves = ['a', 'b', 'c'];
  const arrValores = [1, 2, 3];
  
  const meuMap = funcao(arrChaves, arrValores);
  console.log(meuMap); 
   