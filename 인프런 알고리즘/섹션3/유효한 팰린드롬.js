function solution(s) {
  let answer = false;
  let arr = [];

  s = s.toUpperCase();

  const isAlphabet = (str) => /^[A-Za-z]+$/.test(str);

  for (let i of s) {
    if (isAlphabet(i)) {
      arr.push(i);
    }
  }

  if (arr.join("") === arr.reverse().join("")) {
    answer = true;
  }

  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));

// function solution(s){
//     let answer="YES";
//     s=s.toLowerCase().replace(/[^a-z]/g, '');
//     if(s.split('').reverse().join('')!==s) return "NO";
//     return answer;
// }

// let str="found7, time: study; Yduts; emit, 7Dnuof";
// console.log(solution(str));
