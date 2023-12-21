function solution(n, computers) {
    let answer = 0;
    let check = [false]
    
    function DFS(i) {
        check[i] = true
        for(let j = 0; j < computers[i].length; j++) {
            if(computers[i][j] === 1 && !check[j]) {
                DFS(j)
            }
        }
    }
    
    for(let i = 0; i < computers.length; i++) {
        if(!check[i]) {
            DFS(i)
            answer++
        }
    }
    return answer;
}