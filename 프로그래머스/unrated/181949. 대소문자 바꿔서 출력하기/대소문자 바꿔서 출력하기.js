const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    arr = Array.from(str)
    let result = ''
    for(let i of arr) {
        if(i === i.toUpperCase()) {
            result += i.toLowerCase()
        }
        else {
            result += i.toUpperCase()
        }
    }
    console.log(result)
});