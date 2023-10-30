function solution(a, b) {
    let answer = 1234567890;
    let leng = a.length
    let temp = []
    
    for(let i = 0; i < leng; i++) {
        temp.push(a[i] * b[i])
    }
    
    answer = temp.reduce((a, b) => a + b, 0)
    
    return answer;
}