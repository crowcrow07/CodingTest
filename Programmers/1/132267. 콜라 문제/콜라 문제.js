function solution(a, b, n) {
    let answer = 0;
    let coke = 0
    let temp = 0
    
    while(n >= a) {
        answer += (Math.floor(n / a) * b)
        temp = n % a
        n = (Math.floor(n / a) * b)
        n += temp
    }
    return answer;
}