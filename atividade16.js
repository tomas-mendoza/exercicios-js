function main(vector1, vector2) {
  if(vector1.length !== vector2.length) {
    return false;
  }

  let product = 0;

  for(let i = 0; i < vector1.length; i++) {
    product += vector1[i] * vector2[i];
  }

  return product;
}

module.exports = main;