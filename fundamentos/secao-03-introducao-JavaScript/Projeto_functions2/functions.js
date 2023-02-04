// 1 - Crie a função ligarDesligar, que ligue e desligue um motor de um carro.

const ligarDesligar = (status) => {
  status = status === 'ligado' ? status = 'desligado' : status = 'ligado';

  console.log(`O motor está ${status}`);

  return status;
};

// 2 - Crie a função circleArea, que calcule a área de um círculo.

const circleArea = (raio) => {
  const PI = 3.14;
  let message = '';
  let area = PI * raio ** 2;

  if (typeof raio !== 'number') {
    message = 'O parâmetro radius deve ser um número';
  } else {
    message = `Essa é a área do círculo: ${area}`;
  }
  return message;
};

// 3 - Crie a função longestWord, que receba uma frase como parâmetro e retorne a maior palavra da frase.

const longestWord = (phrase) => {
  let split = phrase.split(' ');
  let message = '';

  for (let index of split) {
    if (index.length > message.length) {
      message = index;
    }
  }
  return message;
};

// Não modifique as linhas abaixo
module.exports = {
  ligarDesligar: typeof ligarDesligar === 'function' ? ligarDesligar : (() => {}),
  circleArea: typeof circleArea === 'function' ? circleArea : (() => {}),
  longestWord: typeof longestWord === 'function' ? longestWord : (() => {}),
};
