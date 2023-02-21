let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

// Function recebe array e retorna um array só de pares
let arrayOfNumbers = (array) => {

  // Variável que armazenará os valores recebidos 
  let result = [];

  // Criar um loop
  for (let index = 0; index < array.length; index += 1) {

    // Variável auxiliar, armazena o valor do loop
    let number = array[index];
    
    // Criar um loop para verificar 'number'
    for (let index2 = 0; index2 < number.length; index2 += 1) {

      // Variável auxiliar, armazena o valor do segundo loop
      let atual = number[index2];
      
      // Descobre se é par ou ímpar
      if (atual % 2 === 0) {

        // Adiciona ao resultado
        result.push(atual)
      };
    };
  };

  return result;
};

console.log(arrayOfNumbers(vector));
