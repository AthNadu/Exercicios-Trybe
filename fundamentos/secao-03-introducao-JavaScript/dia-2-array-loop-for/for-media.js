let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (indexNumbers = 0; indexNumbers < numbers.length ; indexNumbers += 1) {
    soma += numbers[indexNumbers];
}

let media = soma / numbers.length;

console.log(media);
