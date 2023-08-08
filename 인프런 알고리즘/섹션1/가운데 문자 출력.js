// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세 요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

function solution(s){  
    let answer = '';
    let idx

    let leng = s.length

    if(leng % 2 === 1) {
        idx = Math.floor(leng / 2)
        answer = s[idx]
    }
    else {
        idx = Math.floor(leng / 2)
        answer += s[idx - 1]
        answer += s[idx]
    }
   
    return answer;
}
console.log(solution("study"));
console.log(solution("mathaabb"));

// substring 문자열 자르기
// substirng(0, 2) 0번째부터 1번째까지 자르기 (2번째 인자는 포함안함)

// let answer;
// let mid = Math.floor(s.length/2)

// if(s.length % 2 === 1) answer = s.substring(mid, mid + 1);
// else answer = s.substring(mid - 1, mid + 1);