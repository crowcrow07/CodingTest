function solution(x) {
    let answer = true;
    
    let str = x.toString()
    let num = 0
    

    
    for(let i of str) {
        num += +i
    }

    if(x % num !== 0) {
        answer = false
    }
    return answer;
}