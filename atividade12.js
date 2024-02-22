function main(numbers) {
  return numbers.reduce((number, ac = undefined) => {
    if(ac > number || typeof ac === 'undefined') {
      return number;
    }

    return ac;
  });
}

module.exports = main;