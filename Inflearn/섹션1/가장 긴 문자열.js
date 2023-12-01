// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

function solution(s) {
  let answer = "";
  let max = 0;

  for (let i of s) {
    if (max < i.length) {
      max = i.length;
      answer = i;
    }
  }
  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
