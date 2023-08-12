// N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는
// 프로그램을 작성하세요.

function solution(arr) {
  //   let answer = [1, 1, 1, 1, 1];

  let leng = arr.length;
  let answer = Array.from({ length: leng }, () => 1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        answer[i] += 1;
      }
    }
  }

  return answer;
}

let arr = [87, 89, 92, 100, 76];
let arr2 = [87, 87, 87, 87, 76];
console.log(solution(arr));
console.log(solution(arr2));
