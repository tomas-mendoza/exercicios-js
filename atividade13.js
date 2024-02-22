let firstNumber = 0;
let secondNumber = 1;
let nextNumber;

function main(number) {
  const array = [];

  for(let terms = 1; terms <= number; terms++) {
    array.push(firstNumber);
    nextNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = nextNumber;
  }

  return array;
}

module.exports = main;