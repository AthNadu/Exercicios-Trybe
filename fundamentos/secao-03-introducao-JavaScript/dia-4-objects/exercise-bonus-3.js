let basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

// Criando objeto vazio
let total = {};

// Criar loop que percorre o array
for (let index = 0; index < basket.length; index += 1) {

  // Variável que armazena o valor da fruta
  let fruit = basket[index];

  // Criar condição, caso não tenha o valor da fruta, adicione no objeto, caso tenha some mais um
  if (!total[fruit]) total[fruit] = 0;
  total[fruit] += 1;
};

// Criando variável vazia
let values = [];

//Criar loop para percorrer o objeto 'total'
for (const key in total) {

  // Dento do loop será mostrado a quantidade e nome da fruta
  let message = `${total[key]} ${key}`;
  
  // Caso tenha mais de uma terá um 's'
  if (total[key] > 1) {
    message += 's';
  };
  
  // Adicionando message ao array vazio
  values.push(message);
}



console.log(`Sua cesta possui: ${values.join(', ')}`)
