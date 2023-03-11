// O que acontece quando você chama a função sem passar o argumento que ela espera?
// const greeting = (user) => console.log(`Welcome ${user}!`);
// greeting(); // Welcome undefined!

// Você verá que a função retornará undefined. Você consegue pensar em uma forma de corrigir esse problema?
// const greeting = (user) => {
//   const userDisplay = typeof user === 'undefined' ? 'pessoa usuária' : user;
//   console.log(`Welcome ${userDisplay}!`);
// };
// greeting(); // Welcome pessoa usuária!

// Usando o default parameter:
const greeting = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);
greeting(); // Welcome pessoa usuária!


// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1, caso não seja passado nenhum valor como segundo parâmetro.
const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));
