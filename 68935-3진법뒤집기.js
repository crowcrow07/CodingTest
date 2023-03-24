function solution(n) {
  let answer = 0;

  let num = trinity(n);

  let arr = num.split("");
  arr = arr.reverse().join("");

  answer = binary(arr);
  return +answer;
}

function trinity(num) {
  return num.toString(3);
}

function binary(num) {
  return parseInt(num, 3).toString(10);
}
