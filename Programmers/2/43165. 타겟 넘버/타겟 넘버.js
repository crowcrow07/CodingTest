function solution(numbers, target) {
    let answer = 0;
    let leng = numbers.length;
    
    function DFS(L, sum) {
        if(L === leng) {
            if(sum === target) {
                answer++
            }
            return;
        }
        else {
            DFS(L + 1, sum + numbers[L])
            DFS(L + 1, sum - numbers[L])
        }
    }
    
    DFS(0, 0)
    
    return answer;
}