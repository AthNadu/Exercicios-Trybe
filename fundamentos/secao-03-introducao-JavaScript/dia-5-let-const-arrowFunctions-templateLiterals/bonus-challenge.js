// Function replace 'x'

const substituaX = (nome) => {
  const phrase = 'Tryber x aqui';
  const split = phrase.split(' ');
  
  for (let index = 0; index < split.length; index += 1) {
    if (typeof nome === 'string' && split[index] === 'x') {
      split[index] = nome;
    };    
  };

  return split.join(' ');
};

console.log(substituaX('Bebeto'));

// Function receive substituaX and return a new string

const minhasSkills = (func) => {
  const skills = ['HTML', 'CSS', 'JS'];

  let message = `Olá, ${func}!!
  Minhas três principais habilidades são:
  - ${skills[0]}
  - ${skills[1]}
  - ${skills[2]}`;

  return message;
};

console.log(minhasSkills(substituaX('Arthur')));
