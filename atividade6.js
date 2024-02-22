function main(string) {
  return string.match(/[aeiouà-ú]/gi).length;
}

module.exports = main;