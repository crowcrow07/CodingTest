// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
// Number.MAX_SAFE_INTEGER -> 안정적인 정수 최대값

// function solution(arr) {
//   let answer;

//   arr.sort((a, b) => a - b);

//   answer = arr[0];

//   return answer;
// }

// let arr = [5, 7, 1, 3, 2, 9, 11];
// console.log(solution(arr));

// 해답
// function solution(arr) {
//   let answer,
//     min = Number.MAX_SAFE_INTEGER;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }

//   return (answer = min);
// }

// let arr = [5, 7, 1, 3, 2, 9, 11];
// console.log(solution(arr));

// 메서드로 풀기
function solution(arr) {
  let answer;

  answer = Math.min(...arr);

  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
