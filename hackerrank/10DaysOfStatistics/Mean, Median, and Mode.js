function processData(input) {
    //Enter your code here
    var fr = {};
    let maxFr = 0;
    let mode = 0;
    const n = input.split('\n')[0];
    var arr = input.split('\n')[1].split(' ').map(val => +val).sort((a, b) => a - b);
    var sum = arr.reduce((prev, val) => prev + val, 0);
    arr.forEach((val, i) => {
        fr[val] = (fr[val] || 0) + 1;
        if (fr[val] > maxFr) {
            maxFr = fr[val];
            mode = val;
        }
    });
    
    console.log((sum / n).toFixed(1));
    console.log(n % 2 ? arr[(n - 1) / 2] : ((arr[n / 2] + arr[(n / 2) - 1]) / 2));
    console.log(mode);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
