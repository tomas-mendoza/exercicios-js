function main(number) {
  return (
    Math.sqrt(5 * number * number + 4) === Math.floor(Math.sqrt(5 * number * number + 4)) 
    || 
    Math.sqrt(5 * number * number - 4) === Math.floor(Math.sqrt(5 * number * number - 4))
  );
}

module.exports = main;