const findItem = require('../exercises-lessons/findItem');

describe('a função findItem', () => {
  it('retorna o item do inventário dado o nome', () => {
    const inventory = [
      { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 },
    ];

    const item = findItem(inventory, 'banana');
    expect(item).toEqual(inventory[0]);
  });
  it('lança um erro para itens inexistentes', () => {
    const inventory = [
      { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 },
    ];

    expect(() => { findItem(inventory, 'maça'); }).toThrow(new Error('O item não foi encontrado'));
    });
});