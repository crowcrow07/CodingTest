// N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요. 출력하는 문자열은 원래의 입력순서를 유지합니다.

function solution(s) {
  let answer = [];

  for (let i of s) {
    if (answer.includes(i) === false) {
      answer.push(i);
    }
  }

  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));

// answer = s.filter((v, i) => {
//     return s.indexOf(v) === i;
// });

// indexof 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
