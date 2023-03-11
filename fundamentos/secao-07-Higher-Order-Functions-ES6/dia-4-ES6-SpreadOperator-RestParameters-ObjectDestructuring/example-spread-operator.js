// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'pêssego', 'laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'açucar', 'maçã'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional] 
};

console.log(fruitSalad(specialFruit, additionalItens));