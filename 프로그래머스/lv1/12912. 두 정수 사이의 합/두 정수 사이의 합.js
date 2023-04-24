function solution(a, b) {
    let answer = 0;
    
    let arr = []
    
    arr.push(a, b)
    
    arr = arr.sort((a, b) => a - b)
    
    
    
    for(let i = arr[0]; i <= arr[1]; i++) {
        answer += i
    }
    return answer;
}