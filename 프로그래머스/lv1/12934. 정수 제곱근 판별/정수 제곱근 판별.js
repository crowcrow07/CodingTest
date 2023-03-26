function solution(n) {
    let answer = 0;
    
    let num = Math.sqrt(n)
    
    if(num % 1 === 0) {
       answer = (num + 1) ** 2
    }
    else {
        answer = -1
    }
    

    return answer;
}