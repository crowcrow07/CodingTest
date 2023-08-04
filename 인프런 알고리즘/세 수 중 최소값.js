// 정렬로 풀었음
function solution(a, b, c) {
  let answer;
  let arr = [];

  arr.push(a, b, c);

  arr.sort((a, b) => a - b);

  answer = arr[0];

  return answer;
}

console.log(solution(2, 5, 1));

// 정렬 쓰지말고 풀어보라고 해서 if문으로만 풀었음
function solution(a, b, c) {
  let answer = c;

  // a랑 b를 비교한다.
  // a가 작다 그러면 a랑 c를 비교한다
  // b가 작다 그러면 b와 c를 비교한다.

  if (a < b) {
    if (a < c) {
      answer = a;
    }
  }
  if (b < a) {
    if (b < c) {
      answer = b;
    }
  }

  return answer;
}

console.log(solution(212, 9, 21));

// 해답
function solution(a, b, c) {
  let answer = c;

  // a랑 b를 비교한다.
  // a가 작다 그러면 a랑 c를 비교한다
  // b가 작다 그러면 b와 c를 비교한다.

  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }
  if (c < answer) {
    answer = c;
  }

  return answer;
}

console.log(solution(212, 9, 21));
