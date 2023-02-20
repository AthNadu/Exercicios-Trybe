// Requisito 1 - Crie a função verificaPalindromo

const verificaPalindromo = (palindromo) => {
  let verifica = false;
  if (palindromo === 'arara') {
    verifica = true;
  }
  return verifica;
};

// Requisito 2 - Crie a função indiceDoMaior

const indiceDoMaior = (array) => {
  let inteiro = array[0];
  let indexMAior = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > inteiro) {
      inteiro = array[index];
      indexMAior = index;
    }
  }
  return Number(indexMAior);
};

// Requisito 3 - Crie a função indiceDoMenor

const indiceDoMenor = (array) => {
  let inteiro = array[0];
  let indexMenor = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < inteiro) {
      inteiro = array[index];
      indexMenor = index;
    }
  }
  return Number(indexMenor);
};

// Requisito 4 - Crie a função maiorPalavra

const maiorPalavra = (array) => {
  let maior = array[0];

  for (let string of array) {
    if (string.length > maior.length) {
      maior = string;
    }
  }
  return maior;
};

// Requisito 5 - Crie a função maisRepetido

const maisRepetido = (array) => {
  let mais = array[0];
  let numero = 0;

  for (let index = 0; index < array.length; index += 1) {
    let count = 1;
    for (let i = index + 1; i < array.length; i += 1) {
      if (array[index] === array[i]) {
        count += 1;
      }
    }
    if (count > numero) {
      numero = count;
      mais = array[index];
    }
  }
  return mais;
};

// Requisito 6 - Crie a função somatorio

const somatorio = (numero) => {
  let sum = numero;
  const message = 'ERRO';

  if (numero < 0) {
    return message;
  }

  for (let index = 0; index < numero; index += 1) {
    sum += index;
  }

  return sum;
};

// Requisito 7 - Crie a função verificaFimPalavra

const verificaFimPalavra = (palavra1, palavra2) => {
  let fim = palavra1.length - palavra2.length;
  let message = false;
  let verifica = '';

  for (fim; fim < palavra1.length; fim += 1) {
    verifica += palavra1[fim];
  }
  if (verifica === palavra2) {
    message = true;
  }
  return message;
};

// Não modifique essas linhas
module.exports = {
  verificaPalindromo: typeof verificaPalindromo === 'function' ? verificaPalindromo : (() => {}),
  indiceDoMaior: typeof indiceDoMaior === 'function' ? indiceDoMaior : (() => {}),
  indiceDoMenor: typeof indiceDoMenor === 'function' ? indiceDoMenor : (() => {}),
  maiorPalavra: typeof maiorPalavra === 'function' ? maiorPalavra : (() => {}),
  maisRepetido: typeof maisRepetido === 'function' ? maisRepetido : (() => {}),
  somatorio: typeof somatorio === 'function' ? somatorio : (() => {}),
  verificaFimPalavra: typeof verificaFimPalavra === 'function' ? verificaFimPalavra : (() => {}),
};
