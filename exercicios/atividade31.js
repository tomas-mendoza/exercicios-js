function main(number) {
  const isPrime = (number) => {
    for(let divisor = 2; divisor < number; divisor++) {
      if(number % divisor === 0) {
        return false;
      }
    }

    return number > 1;
  }

  let p = 2;
  while (Math.pow(2, p) - 1 <= number) {
      if (Math.pow(2, p) - 1 === number && isPrime(p)) {
          return true;
      }
      p++;
  }
  return false;
}

module.exports = main;