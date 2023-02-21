/* eslint-disable max-len */
// Desafio 11 - Crie a função generatePhoneNumber
const permission2 = (array) => {
  let valor = true;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      valor = false;
    }
  }
  return valor;
};

const permission3 = (array) => {
  let valor2 = true;
  for (let index = 0; index < array.length; index += 1) {
    let count = 1;
    for (let i = index + 1; i < array.length; i += 1) {
      if (array[index] === array[i]) {
        count += 1;
      }
    }
    if (count >= 3) {
      valor2 = false;
    }
  }
  return valor2;
};

const permission = (array) => {
  let lengthpermission = true;
  if (array.length !== 11) {
    lengthpermission = false;
  }
  return lengthpermission;
};

const generatePhoneNumber = (array) => {
  let message = '';

  if (permission(array) === false) {
    message = 'Array com tamanho incorreto.';
  } else if (permission2(array) === false || permission3(array) === false) {
    message = 'não é possível gerar um número de telefone com esses valores';
  } else {
    message = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  }

  return message;
};

// Desafio 12 -  Crie a função triangleCheck

const soma = (lineA, lineB, lineC) => {
  let soma1 = lineA + lineB;
  let soma2 = lineA + lineC;
  let soma3 = lineB + lineC;
  let perm = false;

  if (lineA < soma3 && lineB < soma2 && lineC < soma1) {
    perm = true;
  }
  return perm;
};

const sub = (lineA, lineB, lineC) => {
  let sub1 = Math.abs(lineA - lineB);
  let sub2 = Math.abs(lineA - lineC);
  let sub3 = Math.abs(lineC - lineB);
  let perm1 = false;

  if (lineA > sub3 && lineB > sub2 && lineC > sub1) {
    perm1 = true;
  }
  return perm1;
};

const triangleCheck = (lineA, lineB, lineC) => {
  let result = false;
  if (soma(lineA, lineB, lineC) === true && sub(lineA, lineB, lineC) === true) {
    result = true;
  }
  return result;
};

// Desafio 13 - Crie a função hydrate

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
