var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('inputC.txt')
});
let first = false;
let second = false;
let current = null;

lineReader.on('line', line => {
  num = parseInt(line);
  if (first && !second) {
    current = num;
    second = true;
    console.log(line);
  }
  if (second && num > current) {
     current = num;
     console.log(line);
  }
  first = true;
})