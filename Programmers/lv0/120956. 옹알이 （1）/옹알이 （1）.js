function solution(babbling) {
    let answer = 0;
    let possible = ["aya", "ye", "woo", "ma"]
    
    for(let i = 0; i < babbling.length; i++) {
        possible.forEach((word) => {
            babbling[i] = babbling[i].replace(word, ' ')
        })
        if(babbling[i].replaceAll(' ', '').length === 0) {
            answer += 1
        }
    }
    


    return answer;
}