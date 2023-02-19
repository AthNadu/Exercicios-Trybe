let names = ['João', 'Maria', 'Antônio', 'Margarida'];

console.log ('Lista da chamada:')

for (let list of names) {
    console.log (list);
}


// ForOf array
let numeros = [1,2,3,4,5];
for (let index of numeros) {
    console.log(index);
}

// ForOf string
let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}

// ForOf sum
let arrOfNumbers = [10, 20, 30];
for (let index of arrOfNumbers) {
  index += index;
  console.log(index);
}
