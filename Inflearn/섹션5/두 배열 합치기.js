// 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램 을 작성하세요.

function solution(arr1, arr2) {
  let answer = [];
  let p1 = 0;
  let p2 = 0;
  let m = arr1.length;
  let n = arr2.length;

  while (p1 < m && p2 < n) {
    if (arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1++]);
    } else {
      answer.push(arr2[p2++]);
    }
  }
  while (p1 < m) {
    answer.push(arr1[p1++]);
  }
  while (p2 < n) {
    answer.push(arr2[p2++]);
  }
  console.log(p1, p2);

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
