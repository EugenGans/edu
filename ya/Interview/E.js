var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('inputE.txt')
});
let lines = []
let is = 1;

lineReader.on('line', line => {
	lines.push(line);
}).on('close', () => {
	const [a, b] = lines
	const arr1 = a.split('');
	const arr2 = b.split('');
	const len1 = arr1.length;
	const len2 = arr2.length;
	arr1.forEach(function(item, i) {
	  if (item !== arr2[len2 - i - 1]) { is = 0 }
	});
    console.log(is);
});