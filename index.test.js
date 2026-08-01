import { capitalize, reverse, revPerform, calc, encryptCaesarCipher, decryptCaesarCipher, analyzeArray } from "./index.js";

test('capitalizes first letter of word',  () => {
  expect(capitalize('function')).toMatch('Function');
})

test('reverses function string characters', () => {
  expect(reverse('function')).toMatch('noitcnuf');
})

test('reverses function string characters', () => {
  expect(revPerform('function')).toMatch('noitcnuf');
})

test('adds 1 + 2 to equal 3', () => {
  expect(calc.add(1,2)).toBe(3);
});

test('subtracts 10 - 5 to equal 5', () => {
  expect(calc.subtract(10, 5)).toBe(5);
});

test('multiplies 10 * 10 to equal 100', () => {
  expect(calc.multiply(10, 10)).toBe(100);
});

test('divides 30 / 5 to equal 6', () => {
  expect(calc.divide(30, 5)).toBe(6);
});

test('returns string using Caesar Shift Cipher with a sting input of "Hello, World!" and shift int input of 3 & returns "Khoor, Zruog!"', () => { 
  expect (encryptCaesarCipher('Hello, World!', 3)).toMatch('Khoor, Zruog!');
});

test('returns string using Caesar Shift Cipher result of "Khoor, Zruog!" and returns "Hello, World!"', () => { 
  expect (decryptCaesarCipher('Khoor, Zruog!', 3)).toMatch('Hello, World!');
});

test('returns [1,8,3,4,2,6] with min, max, average, and lenth of array', () => {
  expect (analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6 })
})