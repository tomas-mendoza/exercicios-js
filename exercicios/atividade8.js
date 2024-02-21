function main(string) {
  return string === string.split('').reverse().join('');
}

module.exports = main;