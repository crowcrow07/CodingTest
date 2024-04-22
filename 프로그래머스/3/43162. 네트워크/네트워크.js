function solution(n, computers) {
    let answer = 0;
    let check = [false]
    
    function getValue(i) {
        check[i] = true
        for(let j = 0; j < computers[i].length; j++) {
            if(computers[i][j] === 1 && !check[j]) {
                getValue(j)
            }
        }
    }
    
    for(let i = 0; i < computers.length; i++) {
        if(!check[i]) {
            getValue(i)    
            answer++
        }
        
    }
    
    return answer;
}