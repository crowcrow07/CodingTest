// 어렵게 풀려고 했음..

function solution(day, arr) {
  let answer = 0;

  for (let i of arr) {
    if (i % 10 === day) {
      answer++;
    }
  }

  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
