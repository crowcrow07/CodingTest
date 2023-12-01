function solution(k, m, score) {
    let answer = 0;
    let temp = []
    
    score.sort((a, b) => b - a)
    
    for(let i = 0; i < score.length; i++) {
        temp.push(score[i])
        if(temp.length === m) {
            answer += Math.min(...temp) * m
            temp = []
        }
    }
    
    return answer;
}