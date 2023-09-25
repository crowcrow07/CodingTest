function solution(progresses, speeds) {
    let answer = [];
    let queue = []
    
    for(let i in progresses) {
        queue.push(Math.ceil((100 - progresses[i]) / speeds[i] )) 
    }

    while(queue.length > 0) {
        let first = queue[0]
        let cnt = 0

        while(queue.length > 0 && queue[0] <= first) {
            cnt++
            queue.shift()
        }
        answer.push(cnt)
    }
    
    return answer;
}