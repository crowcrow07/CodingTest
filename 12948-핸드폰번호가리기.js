function solution(num) {
  let answer = "";

  num = num.split("");
  num.splice(-4, 0, "-");
  num = num.join("");

  let [firstNum, secondNum] = num.split("-");

  for (let i of firstNum) {
    answer += "*";
  }

  for (let i of secondNum) {
    answer += i;
  }

  return answer;
}
