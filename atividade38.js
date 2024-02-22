function main(numbers) {
  return numbers.toString().split('').map((number) => parseInt(number)).reduce((ac = 0, number) => ac += parseInt(number));
}

module.exports = main;