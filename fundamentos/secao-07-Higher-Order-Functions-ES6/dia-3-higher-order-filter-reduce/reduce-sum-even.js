const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sum = (accumulator, number) => (
  (number % 2 === 0) ? accumulator + number : accumulator
);

const sumNumbers = (array) => array.reduce(sum, 0);

console.log(sumNumbers (numbers));

// Usando filter e reduce:

// const isEven = (number) => number % 2 === 0;
// const sum = (accumulator, number) => accumulator + number;

// const sumNumbers = (array) => array.filter(isEven).reduce(sum); // Olhe que código pequeno e conciso!

// console.log(sumNumbers(numbers));