function main(numbers) {
  return numbers.filter((number) => number % 2 === 0).length;
}

module.exports = main;