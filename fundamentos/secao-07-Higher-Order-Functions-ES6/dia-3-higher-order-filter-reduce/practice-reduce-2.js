// Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// expectedResult = 20;


const countA = () => {
  const split = names.join('').toLowerCase().split('');

  return split.reduce((acc, curr) => {
    if (curr === 'a'){
      return acc += 1;
    }
    return acc;
  }, 0)
}
