function solution(n, arr) {
  let answer;
  let max = 0;

  for (let i of arr) {
    let temp = i
      .toString()
      .split("")
      .reduce((a, b) => a + +b, 0);
    if (max < temp) {
      max = temp;
      answer = i;
    } else if (max === temp) {
      if (i > answer) {
        answer = i;
      }
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
