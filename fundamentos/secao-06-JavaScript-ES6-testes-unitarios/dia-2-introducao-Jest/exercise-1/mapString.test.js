const {encode, decode} = require('../exercise-1/mapString')

describe('Testes mapString', () => {
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });
  it('a função decode é definida', () => {
    expect(decode).toBeDefined();
  });
  it('Testes encode', () => {
    expect(typeof encode).toBe('function');
    expect(encode('aeiou')).toEqual('12345');
    expect(encode('achei')).toEqual('1ch23');
    expect(encode('achei').length).toEqual(5);
  });
  it('Testes decode', () => {
    expect(typeof decode).toBe('function');
    expect(decode('12345')).toEqual('aeiou');
    expect(decode('1ch23')).toEqual('achei');
    expect(decode('1ch23').length).toEqual(5);
  })
})
