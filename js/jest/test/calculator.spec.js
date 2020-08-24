const Calculator = require('../src/Calculator');
const calc = new Calculator();

test('Should add two numbers', () => {
  expect(calc.sum(8, 2)).toBe(10);
});

test('Should throw an Error with division by 0', () => {
  expect(() => {
    calc.divide(56, 0);
  }).toThrow();
});

test('Should divide two numbers', () => {
  expect(calc.divide(8, 2)).toBe(8);
});
