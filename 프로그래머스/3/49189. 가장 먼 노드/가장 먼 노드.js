function solution(n, edge) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => [])

    
    for(let [start, end] of edge) {
        graph[start].push(end)
        graph[end].push(start)
    }
    
    const distance = Array(n + 1).fill(0).fill(1, 0, 2)
    
    let needVisit = [1]
    
    while(needVisit.length) {
        const cur = needVisit.shift()
        for(let node of graph[cur]) {
            if(!distance[node]) {
                distance[node] = distance[cur] + 1
                needVisit.push(node)
            }
        }
    }

    const max = Math.max(...distance)
    return distance.filter((v) => max === v).length
}