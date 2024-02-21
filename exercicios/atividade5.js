function main(numbers) {
  return numbers.reduce((number, ac) => ac+=number);
}

module.exports = main;