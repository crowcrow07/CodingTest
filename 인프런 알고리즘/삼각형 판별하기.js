// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

// function solution(a, b, c) {
//   let answer = "YES";

//   //   가장 큰 수는 다른 두 수보다 작아야 함
//   let max, other;
//   let arr = [];

//   arr.push(a, b, c);
//   arr.sort((a, b) => b - a);

//   max = arr[0];
//   other = arr[1] + arr[2];

//   if (other <= max) {
//     return "NO";
//   }

//   return answer;
// }

// console.log(solution(11, 33, 17));

// 해답
function solution(a, b, c) {
  let answer = "YES",
    max,
    sum = a + b + c;

  if (a < b) {
    max = b;
  } else {
    max = a;
  }
  if (max < c) {
    max = c;
  }

  if (sum - max <= max) {
    return "NO";
  }

  return answer;
}

console.log(solution(11, 33, 17));
