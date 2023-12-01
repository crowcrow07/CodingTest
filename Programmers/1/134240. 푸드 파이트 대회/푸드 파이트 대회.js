function solution(food) {
    let answer = '';
    
    for(let i = 1; i < food.length; i++) {
        answer += (i.toString().repeat(Math.floor(food[i] / 2)))
    }

    let temp = answer.split('').reverse().join('')
  
    answer += ('0' + temp)
    
    return answer;
}