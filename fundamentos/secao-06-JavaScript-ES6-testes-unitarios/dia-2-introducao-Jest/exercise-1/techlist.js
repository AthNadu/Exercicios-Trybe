const tech = ['CSS', 'HTML', 'JavaScript', 'Jest', 'React'];

const techList = (array, nome) => {
  if (!array.length) {
    return `Vazio!`
  }
  const arraySort = array.sort();
  let list = [];
  for (index = 0; index < arraySort.length; index += 1) {
    list.push(
      {tech: array[index],
        name: nome,
      });
  }
  return list;
};

console.log(techList(tech, 'Arthur'));

module.exports = techList;