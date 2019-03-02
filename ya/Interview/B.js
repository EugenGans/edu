var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('inputB.txt')
});

let lines = [];
lineReader.on('line', line => {
  lines.push(parseInt(line));
}).on('close', () => {
    let max = 0;
    delete lines[0];
    
    lines.reduce((count, num) => {
  		count = (num === 1) ? count + 1 : 0;
        max = count > max ? count : max;
        return count;
	}, 0);
    
    console.log(max);
});