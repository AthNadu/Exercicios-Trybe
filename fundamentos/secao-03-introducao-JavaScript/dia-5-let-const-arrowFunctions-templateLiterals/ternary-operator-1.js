// Altere a expressão if/else utilizando ternary operator

let speed = 90;

// const speedCar = (speed) => {
//   if (speed >= 120) {
//     return `Você ultrapassou o limite de velocidade`;
//   } else {
//     return `Você está na velocidade permitida`;
//   }
// };

const speedCar = (speed) => (
  speed >= 120 ? `Você ultrapassou o limite de velocidade: acima de 120Km/h` : `Você está na velocidade permitida: abaixo de 120Km/h`
);  

console.log(speedCar(speed));