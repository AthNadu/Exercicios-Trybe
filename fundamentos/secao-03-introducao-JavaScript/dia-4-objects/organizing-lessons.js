let lesson1 = {
materia: 'Matemática',
numeroEstudantes: 20,
professor: 'Maria Clara',
turno: 'manhã',
};

let lesson2 = {
materia: 'História',
numeroEstudantes: 20,
professor: 'Carlos',
};

let lesson3 = {
materia: 'Matemática',
numeroEstudantes: 10,
professor: 'Maria Clara',
turno: 'noite',
};

let newKey = 'turno';
let value = 'noite';

// Function add parameters

function addParameters(key, object, value) {
  object[key] = value;
};

addParameters(newKey, lesson2, value);
console.log(lesson2);

// Function list keys

function listKeys(object) {
  return Object.keys(object);
};

console.log(listKeys(lesson2));

// Function width keys

function keysLength(object) {
  return Object.keys(object).length;
};

console.log(keysLength(lesson2));

// Function list values

function listValues(object) {
  return Object.values(object);
};

console.log(listValues(lesson2));

// Cloning objects

let allLessons = Object.assign({}, {lesson1: lesson1, lesson2: lesson2, lesson3: lesson3});

console.log(allLessons);

// Function sum number students

function numStudents() {
  let students = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;

  return students;
}

console.log(numStudents());

// function getNumberOfStudents(obj) {
//   let total = 0;

//   let keys = Object.keys(obj);
    
//   for (index in keys) {
//     total += obj[keys[index]].numeroEstudantes;
//   }
//   return total;
// }
// console.log(getNumberOfStudents(allLessons));

// Function get values by your number

function getValueByNumber(object, num) {
  return Object.values(object)[num];
};

console.log(getValueByNumber(lesson2, [0]));

// Function validate parameters

function validateParameter(object, keyName, valueKey) {
  let validate = false;
  let key = Object.getOwnPropertyDescriptor(object, keyName);
  let valor = object.keyName

    if (key && valor === valueKey) {
      validate = true;
    }

  return validate;
};

// function verifyPair(obj, key, value) {
//   let entries = Object.entries(obj);
//   let isEqual = false;
//   for (let index in entries) {
//     if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
//   }
//   return isEqual;
// }

console.log(validateParameter(lesson2, 'materia', 'História'));

// Function count students math lesson

function countStudentsMath(object, materia) {
  let number = 0;
  let keys = Object.keys(object);

  for (let key in keys) {
    if (object[keys[key]].materia === materia) {
      number += object[keys[key]].numeroEstudantes;
    };
  };

  return number;
}

console.log(`O número de estudantes da matéria é: ${countStudentsMath(allLessons, 'Matemática')}`);


// Function report lesson 

function reportLesson(object, name) {
  let array = [];
  let keys = Object.keys(object);
  let students = 0;

  for (let index = 0; index < keys.length; index += 1) {
    if (object[keys[index]].professor === name) {
      array.push(object[keys[index]].materia)
      students += object[keys[index]].estudantes
    };    
  };

  return {
    professor: name,
    aulas: array,
    estudantes: students
  };
};

console.log(reportLesson(allLessons, 'Maria Clara'));