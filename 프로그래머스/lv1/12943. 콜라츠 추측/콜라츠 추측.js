function solution(num) {
    let answer = 0;
    let cnt = 0
    
    if(num === 1) {
        return 0
    }
    
    while(num > 0) {
        cnt += 1
        if(num % 2 === 0) {
            num /= 2
        }
        else if(num % 2 !== 0) {
            num = (num * 3) + 1
        }
        if(num === 1) {
            return cnt
        }
        if(cnt === 500) {
            return -1
        }
    }
    
    return answer;
}