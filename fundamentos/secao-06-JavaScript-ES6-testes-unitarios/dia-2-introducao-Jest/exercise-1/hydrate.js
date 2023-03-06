const hydrate = (string) => {
  const splited = string.split('');

  let water = 0;

  for (index = 0; index < splited.length; index += 1) {
    const parse = parseInt(splited[index]);

    if (parse) {
      water += parse;
    }
  }

  let cup = 'copo';

  if (water > 1) {
    cup = 'copos';
  }

  return `${water} ${cup} de água`;
};

module.exports = hydrate;