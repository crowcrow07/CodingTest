function solution(n) {
    let answer = 0;
    
    n = n.toString()
    
    n = n.split('')

    n = n.sort((a , b) => b - a)
    
    n = n.join('')
    answer = +n
    return answer;
}