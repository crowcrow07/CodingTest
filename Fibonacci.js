function solution(n) {
  let answer = 0;
  let cnt = 1;
  let firstNum = 0,
    secondNum = 1,
    sumNum = 0;
  while (cnt !== n) {
    sumNum = firstNum + secondNum;
    sumNum %= 1234567;
    firstNum = secondNum;
    firstNum %= 1234567;
    secondNum = sumNum;
    cnt += 1;
  }

  return (answer = secondNum);
}
