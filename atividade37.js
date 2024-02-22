function main(number) {
  const stringNumber = number.toString();
  let sum = 0;

  for(let i = 0; i < stringNumber.length; i++) {
    const digit = parseInt(stringNumber[i]);
    sum += Math.pow(digit, stringNumber.length);
  }

  return sum === number;
}

module.exports = main;