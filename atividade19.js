function main(numbers) {
  return numbers.reduce((number, ac = 0) => number += ac)/numbers.length
}

module.exports = main;