// Crie um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos.

const user = {
  nome: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userJobsInfos = {
  ...user,
  ...jobInfos,
};

// Imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.

const {nome, age, nationality, profession, squad, squadInitials} = userJobsInfos;

console.log(`Hi, my name is ${nome}, I'm ${age}years old and I'm ${nationality}.
I work as ${profession} and my squad is ${squadInitials}-${squad}`);