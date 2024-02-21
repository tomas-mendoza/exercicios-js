function main(number) {
  for(let i = 0; i < number; i++) {
    if(Math.pow(2, i) === number) {
      return true;
    }
  }

  return false;
}

module.exports = main;