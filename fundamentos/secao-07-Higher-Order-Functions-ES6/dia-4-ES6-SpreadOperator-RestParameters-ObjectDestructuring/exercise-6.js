// O objeto yearSeasons representa as estações do ano. Cada chave do objeto é uma estação, e o valor de cada chave é um array de strings que representa os meses daquela estação. A partir desse objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano.


const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

// using spread operator:
const yearMonths = [...yearSeasons.winter, ...yearSeasons.spring, ...yearSeasons.summer, ...yearSeasons.autumn];

// using object destructuring and spread operator:
const {winter, spring, summer, autumn} = yearSeasons;
const months = [...winter, ...spring, ...summer, ...autumn];
