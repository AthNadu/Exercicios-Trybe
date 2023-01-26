let numbers = [];

let div= [];

for (let index = 1; index <= 25; index += 1) {
    numbers.push(index);
}

console.log('Os números requisitados são:', numbers);

console.log('A divisão dos números requisitados são:');

for (let indexdiv = 0; indexdiv < numbers.length; indexdiv += 1) {
    console.log(numbers[indexdiv] / 2);
}
