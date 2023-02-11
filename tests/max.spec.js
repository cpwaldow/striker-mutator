const max = require('../src/max');

describe('Cenários de teste para a função max', () => {
  test('max(1,2) retorna 2', () => {
    expect(max(1, 2)).toBe(2);
  });
  test('max(4,3) retorna 4', () => {
    expect(max(4, 3)).toBe(4);
  });
});
