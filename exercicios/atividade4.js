function main(number) {
  for(let divisor; divisor < number; divisor++) {
    if(number % divisor === 0) {
      return false;
    }
  }

  return number > 1;
}

module.exports = main;