var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('inputC.txt')
});


lineReader.on('line', line => {

    console.log(line);

}).on('close', () => {
    
});