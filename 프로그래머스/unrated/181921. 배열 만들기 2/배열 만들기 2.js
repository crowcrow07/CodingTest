function solution(l, r) {
    let answer = [];
    
    if(l < 5) {
        return [-1]
    }
    
    function DFS(cnt) {  
        if(r < +cnt) {
            return;
        }
        else {
            if(l <= +cnt) {
                answer.push(+cnt)
            }
            DFS(cnt + '0')
            DFS(cnt + '5') 
        }
    }
    DFS('5')
    
    if(answer.length === 0) return [-1]
    
    answer.sort((a, b) => a - b)
    
    return answer;
}