function main(numbers) {
  const getMdc = (number1, number2) => {
    while(number2 > 0) {
      let temp = number2;
  
      number2 = number1 % number2;
  
      number1 = temp;
    }
  
    return number1;
  }

  if(numbers.length < 2) {
    return null;
  }

  let result;
  let actualValue = numbers[0];

  for(let i = 1; i < numbers.length; i++) {
    result = getMdc(actualValue, numbers[i]);

    if(actualValue > numbers[i]) {
      actualValue = numbers[i];
    }
  }

  return result;
}

module.exports = main;