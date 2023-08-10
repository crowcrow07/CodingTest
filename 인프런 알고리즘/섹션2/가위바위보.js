// A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고,
// B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
// 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다

function solution(a, b) {
  let answer = "";

  const RPS = { scissors: 1, rock: 2, paper: 3 };

  for (let idx in a) {
    if (a[idx] === b[idx]) {
      answer += "D";
    } else if (
      (a[idx] === RPS.scissors && b[idx] === RPS.rock) ||
      (a[idx] === RPS.rock && b[idx] === RPS.paper) ||
      (a[idx] === RPS.paper && b[idx] === RPS.scissors)
    ) {
      answer += "B";
    } else {
      answer += "A";
    }
  }

  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
