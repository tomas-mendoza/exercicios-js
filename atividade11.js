function main(year) {
  return year % 4 === 0 || year % 400 === 0 ? true : false;
}

module.exports = main;