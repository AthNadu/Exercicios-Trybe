const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compare = (correctArray, studentArray) => {
  if (correctArray === studentArray) {
    return -1;
  } if (studentArray === 'N.A') {
    return 0;
  }
  return 0.5;
};

const autocorrect = (correctArray, studentArray) => {
  let result = 0;

  correctArray.forEach(element => {
    const action = compare(correctArray, studentArray);
    result += action;
  });

  return `O resultado foi de ${result} pontos`;
};

console.log(autocorrect(RIGHT_ANSWERS, STUDENT_ANSWERS));