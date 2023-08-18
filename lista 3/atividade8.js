/* Crie uma função que recebe uma string como parâmetro e conta a quantidade de
ocorrências de cada palavra na frase. A função deve retornar um objeto Map, onde as chaves
são as palavras encontradas e os valores são as contagens das palavras. */


  function funcao(string) {
    const palavras = string.toLowerCase().split(/\s+/);
    
    return palavras.reduce((contagem, palavra) => {
      contagem.set(palavra, (contagem.get(palavra) || 0) + 1);
      return contagem;
    }, new Map());
  }
  
  const frase = "Três tigres tristes para três pratos de trigo. Três pratos de trigo para três tigres tristes";
  const contagemPalavras = funcao(frase);
  
  contagemPalavras.forEach((contagem, palavra) => {
    console.log(`${palavra}: ${contagem}`);
  });
  