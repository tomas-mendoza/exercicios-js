function main(string) {
  return !/(.+)(?=.*\1)/gm.test(string);
}

module.exports = main;