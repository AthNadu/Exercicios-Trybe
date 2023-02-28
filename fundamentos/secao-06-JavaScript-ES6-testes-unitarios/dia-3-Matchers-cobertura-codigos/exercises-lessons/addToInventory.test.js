const addToInventory = require('../exercises-lessons/addToInventory');

describe('a função addToInventory', () => {
  it('Aumenta o tamanho do array em 1 e checa se contém o valor passado', () => {
    let inventory = ['alguma coisa'];
    let arrayLength = inventory.length;
    addToInventory(inventory, 'qualquer coisa');
    expect(inventory).toContain('qualquer coisa');
    expect(inventory).toHaveLength(arrayLength + 1);
  });
  it('chamar a função sem parâmetros lança a exceção', () => {
    expect(() => { addToInventory(); }).toThrow(Error);
  });
});