function solution(info, edges) {
    let answer = 0;
    let graph = Array.from({length: info.length}, () => [])
    
    for(let [start, end] of edges) {
        graph[start].push(end)
    }
    
    function DFS(node, animals, visit) {
        info[node] === 0 ? animals[0]++ : animals[1]++
        if(animals[0] <= animals[1]) return;
        visit.push(...graph[node])
        visit.forEach((val, idx, arr) => {
            const rest = arr.filter((_, i) => idx !== i)
            DFS(val, [...animals], rest)
        })
        if(animals[0] > answer) answer = animals[0]
        return;
    }
    
    
    DFS(0, [0, 0], [])
    
    return answer;
}