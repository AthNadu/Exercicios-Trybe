const myFizzBuzz = require('../exercise-1/myFizzBuzz');

describe('Testes da função myFizzBuzz', () => {
  it('verificar se a função retorna como esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(4)).toBe(4);
    expect(myFizzBuzz('sete')).toBe(false);
  });
});
