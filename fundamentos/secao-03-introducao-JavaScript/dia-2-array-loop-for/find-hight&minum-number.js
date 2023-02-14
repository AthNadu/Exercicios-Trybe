let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numeroMaior =numbers[0];

let numeroMenor =numbers[0];

for (indexNumbers = 1; indexNumbers < numbers.length ; indexNumbers += 1) {
    if (numbers[indexNumbers] > numeroMaior) {
        numeroMaior = numbers[indexNumbers];
    }
}

for (indexNumbers = 1; indexNumbers < numbers.length ; indexNumbers += 1) {
    if (numbers[indexNumbers] < numeroMenor) {
        numeroMenor = numbers[indexNumbers];
    }
}

console.log('O número maior é:', numeroMaior);

console.log('O número menor é:', numeroMenor);
