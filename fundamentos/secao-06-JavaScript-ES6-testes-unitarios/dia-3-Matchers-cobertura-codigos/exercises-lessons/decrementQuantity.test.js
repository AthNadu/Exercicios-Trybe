const decrementQuantity = require('../exercises-lessons/decrementQuantity');

describe('a função decrementQuantity', () => {
  it('desconta da quantidade disponível do item', () => {
    const inventory = [
      { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 },
    ];
    decrementQuantity(inventory, 'banana', 5);
    const result = inventory[0].quantity;
    expect(result).toBe(15);
    expect(inventory).toEqual([{ name: 'banana', unit: 'kg', price: 1.99, quantity: 15 }]);
  });

  it('decrementa a quantidade disponível do item', () => {
    const inventory = [
      { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 },
    ];
    decrementQuantity(inventory, 'banana');
    const result = inventory[0].quantity;
    expect(result).toBe(19);
    expect(inventory).toEqual([{ name: 'banana', unit: 'kg', price: 1.99, quantity: 19 }]);
  });
  it('lança um erro ao tentar remover mais do que tem', () => {
    const inventory = [
      { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 },
    ];
    expect(() => decrementQuantity(inventory, 'banana', 30))
    .toThrow(new Error('O decremento deve ser menor ou igual a quantidade atual'));
  });
});
