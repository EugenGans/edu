var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('inputF.txt')
});
let lines = []
let res = []

lineReader.on('line', line => {
	lines.push(line);
}).on('close', () => {
	delete lines[0];

	lines.forEach(function(line, i) {
		let arr = line.split(' ');
		console.log(line, arr);
		delete arr[0];
	  	res = res.concat(arr);
	});
	res.sort((a, b) => { return a - b; });
    console.log(res);
});