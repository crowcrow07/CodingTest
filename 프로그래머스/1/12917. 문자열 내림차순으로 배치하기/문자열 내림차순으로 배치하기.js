function solution(s) {
    let answer = '';
    let temp = []
    

    
    for(let i of s) {
        temp.push(i)
    }
    
    answer = temp.sort((a, b) => a > b ? -1 : 1).join('')
    

    
    return answer;
}