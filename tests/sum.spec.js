const sum = require('../src/sum');

describe('Cenários de teste para a função sum', () => {
  test('sum(1,2) retorna 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
