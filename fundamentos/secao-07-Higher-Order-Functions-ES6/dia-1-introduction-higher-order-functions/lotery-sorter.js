const message = (random, myNumber) => {
  let result = false;
  if (random === myNumber) {
    result = true;
  }
 return result
};

const generateNumber = (myNumber) => {
  const random = Math.floor((Math.random() * 5) + 1)

  if (message(random, myNumber)) {
    return `Parabéns, você ganhou, os númeors foram ${random} e ${myNumber}`;
  } else {
    return `Tente novamente, os númeors foram ${random} e ${myNumber}`;
  }
};

console.log(generateNumber(4));