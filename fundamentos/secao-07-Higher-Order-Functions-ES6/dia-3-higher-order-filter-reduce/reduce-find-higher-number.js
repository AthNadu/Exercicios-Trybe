const numbers = [50, 85, -30, 3, 15];

const bigger = numbers.reduce((big, num) => {
  if (big > num) {
    return big;
  }
  return num;
});


// Mesmo código em apenas uma linha:

// numbers.reduce((bigger, number) => bigger > number ? bigger : number);



// Mesmo código separado em função:

// const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);
// const bigger = numbers.reduce(getBigger);
