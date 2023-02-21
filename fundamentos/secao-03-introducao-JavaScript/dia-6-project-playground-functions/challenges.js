/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
// Desafio 1 - Crie a função compareTrue

const compareTrue = (valor1, valor2) => (!!(valor1 === true && valor2 === true));

// Desafio 2 - Crie a função splitSentence

const splitSentence = (frase) => frase.split(' ');

// Desafio 3 - Crie a função concatName

const concatName = (array) => `${array[array.length - 1]}, ${array[0]}`;

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) => (wins * 3) + ties;

// Desafio 5 - Crie a função highestCount

const highestCount = (array) => {
  let higherNumber = array[0];

  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > higherNumber) {
      higherNumber = array[index];
    }
  }

  let contador = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (higherNumber === array[index]) {
      contador += 1;
    }
  }

  return contador;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, heigth) => (base * heigth) / 2;

const calcRectangleArea = (base, heigth) => (base * heigth);

const calcAllAreas = (base, heigth, form) => {
  let message = '';
  if (form === 'triângulo') {
    message = `O valor da área do triângulo é de: ${calcTriangleArea(base, heigth)}`;
  } else if (form === 'retângulo') {
    message = `O valor da área do retângulo é de: ${calcRectangleArea(base, heigth)}`;
  } else {
    message = 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
  return message;
};

// Desafio 7 - Crie a função catAndMouse

const catAndMouse = (mouse, cat1, cat2) => {
  const catNear1 = Math.abs(mouse - cat1);
  const catNear2 = Math.abs(mouse - cat2);
  message = '';

  if (catNear1 < catNear2) {
    message = 'cat1';
  } else if (catNear2 < catNear1) {
    message = 'cat2';
  } else {
    message = 'os gatos trombam e o rato foge';
  }
  return message;
};

// Desafio 8 - Crie a função fizzBuzz

const fizzBuzz = (array) => {
  let string = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      string.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      string.push('buzz');
    } else if (array[index] % 3 === 0) {
      string.push('fizz');
    } else {
      string.push('bug!');
    }
  }

  return string;
};

// Desafio 9 - Crie a função encode e a função decode

const encode = (string) => {
  const a = string.replace(/a/g, 1);
  const e = a.replace(/e/g, 2);
  const i = e.replace(/i/g, 3);
  const o = i.replace(/o/g, 4);
  const u = o.replace(/u/g, 5);

  const code = u;

  return code;
};

const decode = (string) => {
  const um = string.replace(/1/g, 'a');
  const dois = um.replace(/2/g, 'e');
  const tres = dois.replace(/3/g, 'i');
  const quatro = tres.replace(/4/g, 'o');
  const cinco = quatro.replace(/5/g, 'u');

  const code = cinco;

  return code;
};

// Desafio 10 - Crie a função techList

const techList = (array, string) => {
  const list = [];
  array.sort();

  if (array.length !== 0) {
    for (let index = 0; index < array.length; index += 1) {
      let object = {
        tech: array[index],
        name: string,
      };
      list.push(object);
    }
  }
  return list;
};

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
