function solution(k, score) {
    let answer = [];
    let glory = []
        
    for(let i = 0; i < k; i++) {
        if(score[i] !== undefined){
            glory.push(score[i])
        }
        glory.sort((a , b) => a - b)
        if(answer.length < score.length) {
            answer.push(glory[0])
        }
    }
    
    for(let j = k; j < score.length; j++) {
        if(glory[0] < score[j]) {
            glory[0] = score[j]
        }
        glory.sort((a , b) => a - b)
        answer.push(glory[0])
    }
    
    return answer;
}