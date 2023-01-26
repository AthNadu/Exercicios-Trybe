let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impar = 0;

console.log('Os números ímpares são:');

for (indexNumbers = 0; indexNumbers < numbers.length ; indexNumbers += 1) {
    if (numbers[indexNumbers] % 2 != 0) {
        impar += 1;
        console.log(numbers[indexNumbers]);
    }
}

if (impar != 0) {
    console.log('A quantidade é:');
    console.log(impar);
}
else {
    console.log('nenhum valor ímpar encontrado');
}
