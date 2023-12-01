function solution(s) {
    let answer = '';
    let i = 0
    
    if(s.length % 2 === 0) {
        i = s.length / 2
        answer += s[i - 1]
        answer += s[i]
    }
    else {
        i = Math.floor(s.length / 2)
        answer += s[i]
    }
    return answer;
}