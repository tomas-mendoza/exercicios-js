function main(phrases, acrostic) {
  const result = [];

  for(const words of phrases) {
    result.push(words[0]);
  }

  return result.join('') === acrostic
}

module.exports = main;