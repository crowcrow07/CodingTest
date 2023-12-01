function solution(a, b) {
    let answer = 1234567890;
    let leng = a.length

    answer = a.reduce((v, _, i) => v += a[i] * b[i], 0)
    
    return answer;
}