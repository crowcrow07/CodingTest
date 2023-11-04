function solution(str1, str2) {
    let answer = '';
    
    
    str1.split('').forEach((v, i) => {
        answer += str1[i]
        answer += str2[i]
    })
    return answer;
}