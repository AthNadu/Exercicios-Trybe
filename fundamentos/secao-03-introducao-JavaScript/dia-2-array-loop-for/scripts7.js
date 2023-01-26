let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numeroMaior = 0;

for (indexNumbers = 1; indexNumbers < numbers.length ; indexNumbers += 1) {
    if (numbers[indexNumbers] > numeroMaior) {
        numeroMaior = numbers[indexNumbers];
    }
}

console.log(numeroMaior);
