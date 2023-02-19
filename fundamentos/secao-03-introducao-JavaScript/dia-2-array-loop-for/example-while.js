// primeiro exemplo, contar até o 5
let counter = 0;

while(counter !== 5) {
  counter += 1;
  console.log(counter);
}

// exemplo de dados
// irá se repetir até que o número da variável d1 seja igual da d2

let d1 = Math.ceil(Math.random() * 6);
console.log('resultado d1:', d1);
let d2 = Math.ceil(Math.random() * 6);

while (d1 !== d2) {
  d2 = Math.ceil(Math.random() * 6);
  console.log('resultado d2:', d2);
};

// outra forma de se fazer
// irá se repetir até que os números dos dados sejam diferentes

let dice = () => {
  return Math.ceil(Math.random() * 6);  
};

let dice1 = dice();
console.log('dado 1: ', dice1);
let dice2 = dice();
console.log('dado 2: ', dice2);

while (dice1 === dice2) {
    dice2 = dice();
    console.log('dado 2: ', dice2);
};
