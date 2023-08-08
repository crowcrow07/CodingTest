// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.

function solution(s) {
  let answer = "";

  for (let i of s) {
    if (i === "A") {
      answer += "#";
    } else {
      answer += i;
    }
  }
  return answer;
}

let str = "BANANA";
console.log(solution(str));

// 정규식으로 푸는 방법
// answer=answer.replace(/A/g, "#");
