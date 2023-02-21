// Associando cada número ao seu valor

let numerosRomanos = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

// Function recebe numeros romanos

let romanToDecimal = (number) => {
  // Todos os caracteres minúsculos
  number = number.toLowerCase();

  // Recebe o tamano dos números
  let width = number.length;

  // Recebe o valor final da função
  let sum = numerosRomanos[number[width - 1]];

  // Variável auxilia loop
  let atual = numerosRomanos[number[width - 1]];

  // loop inicia no 2 e vai até o número da variável
  for (let index = 2; index <= width; index += 1) {
    // Variável que irá armazenar o valor em 'atual'
    let prox = numerosRomanos[number[width - index]];

    // Condicional, Caso 'atual' seja menor ou igual a 'prox', 'sum' deverá somar seu valor com 'prox'. Caso contrário, 'sum' subtrairá de 'prox'
    if (atual <= prox) {
      sum += prox;
    } else {
      sum -= prox;
    };
    
    // 'atual' recebe valor de 'prox', para que o loop continue
    atual = prox;
  };

  return sum;
};

console.log(romanToDecimal('MMXVIII')); // 2018
console.log(romanToDecimal('VI')); // 6
console.log(romanToDecimal('IV')); // 4
