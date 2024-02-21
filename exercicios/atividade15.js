function main(string1, string2) {
  string1 = string1.replace(/\s/g, '').toLowerCase();
  string2 = string2.replace(/\s/g, '').toLowerCase();

  if(string1.length !== string2.length) {
    return false;
  }
  
  string1 = string1.split('').sort().join('');
  string2 = string2.split('').sort().join('');
  
  return string1 === string2;
}

module.exports = main;