const getInventoryValue = require('../exercises-lessons/getInventoryValue');

describe('a função getInventoryValue', () => {
  it('retorna zero para um inventário vazio', () => {
    const inventory = [];

    const value = getInventoryValue(inventory);

    expect(value).toBe(0);
  });
  it('retorna o valor do inventário', () => {
    const inventory = [
      { name: 'maça', unit: 'kg', price: 5.69, quantity: 38 },
      { name: 'ovos', unit: 'dúzia', price: 5.07, quantity: 19 },
      { name: 'leite', unit: 'pacote', price: 5.19, quantity: 41 },
      { name: 'banana', unit: 'kg', price: 1.99, quantity: 0 },
    ];

    const value = getInventoryValue(inventory);

    expect(value).toBeCloseTo(525.34);
  });
});
