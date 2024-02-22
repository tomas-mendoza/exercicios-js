function main(elements) {
  const uniqueElements = [];

  for(const element of elements) {
    const searchElement = elements.filter((el) => el === element);

    if(searchElement.length === 1) {
      uniqueElements.push(element);
    }
  }

  return uniqueElements.length;
}

module.exports = main;