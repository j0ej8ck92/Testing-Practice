//A capitalize function that takes a string and returns it with the first character capitalized.
export function capitalize(str){
  const manipulation = str.split('');
  const change = str.charAt(0).toUpperCase() + str.slice(1);
  return change;
}

//A reverseString function that takes a string and returns it reversed.
export function reverse(str) {
  const change = str.split('').reverse().join('');
  return change;
}

//A reverseString function that takes a string and returns it reversed with higher performance.
export function revPerform(str) {
  let reversed = '';
  for (i = str.length - 1; i >= 0; i--){
    reversed += str[i];
  }
  return reversed;
}

//A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply.
//  Each of these functions should take two numbers and return the correct calculation.
export const calc = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      return 0;
    } else {
      return a / b;
    }
  } 
};

//A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”. 
//For example, a = d, b = e, etc... 
//Make sure the output is case sensitive along with punctuation as well.
export function encryptCaesarCipher(str, shift){
  return str.split('').map(char => {
    const ASCII_dec = char.charCodeAt(0)

    if (ASCII_dec > 96 && ASCII_dec < 123 ){
      const result = ((ASCII_dec - 97 + shift) % 26) + 97;
      return String.fromCharCode(result);
    }
    if (ASCII_dec > 64 && ASCII_dec < 91 ){
      const result = ((ASCII_dec - 97 + shift) % 26) + 97;
      return String.fromCharCode(result);
    }
    return char;
  }).join('');
}

export function decryptCaesarCipher(str, shift){
    return str.split('').map(char => {
    const ASCII_dec = char.charCodeAt(0)

    if (ASCII_dec > 96 && ASCII_dec < 123 ){
      const result = ((ASCII_dec - 97 - shift) % 26) + 97;
      return String.fromCharCode(result);
    }
    if (ASCII_dec > 64 && ASCII_dec < 91 ){
      const result = ((ASCII_dec - 97 - shift) % 26) + 97;
      return String.fromCharCode(result);
    }
    return char;
  }).join('');

}

//An analyzeArray function that takes an array of numbers and returns an object 
// with the following properties: average, min, max, and length.
export function analyzeArray(arr){
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
    sum += arr[i];
  }
  const average = sum / arr.length;

  return {
    average: average,
    min: min,
    max: max,
    length: arr.length
  };

}




