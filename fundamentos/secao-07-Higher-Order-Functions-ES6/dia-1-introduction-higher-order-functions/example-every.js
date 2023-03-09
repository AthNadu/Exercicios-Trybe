const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (array, minAge) => array.every((element) => element.age >= minAge);

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));