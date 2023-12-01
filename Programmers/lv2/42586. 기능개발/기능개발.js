function solution(progresses, speeds) {
    let answer = [];
    let queue = []
    
    for(let i = 0; i < progresses.length; i++) {
        queue.push(Math.ceil((100 - progresses[i]) / speeds[i]))
    }
    
//     queue에 있는 게 사라질때까지 반복문을 돌려야함
    while(queue.length > 0) {
//         카운트를 정의
//         첫번째값도 정의
        let first = queue[0]
        let cnt = 0
//         비교하는 반복문을 돌려줌
//         length가 0 이상이고 queue[0]이 first보다 작거나 같으면 cnt 증가시키면서 shift를 해준다.
        while(queue.length > 0 && queue[0] <= first ) {
            cnt++
            queue.shift()
        }
        answer.push(cnt)
    }
    
    return answer;
}