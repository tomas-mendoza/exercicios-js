function main(string) {
  const findLetters = new Set(string.toLowerCase().replace(/[^a-z]/g, ''));
  
  return findLetters.size === 26;
}

module.exports = main;