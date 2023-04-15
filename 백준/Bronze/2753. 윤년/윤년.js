const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : require("path").resolve(__dirname, "./testcase.txt")
  )
  .toString()
  .trim()
  .split("\n");

N = input.map(Number);
N = N.join("");


function leapYear(year) {
    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return 1
    }
    else {
        return 0
    }
}


console.log(leapYear(N))