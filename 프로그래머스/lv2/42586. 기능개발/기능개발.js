function solution(progresses, speeds) {
    let answer = [];
    let queue = []
    
    for(let i in progresses) {
        queue.push(Math.ceil((100 - progresses[i]) / speeds[i] )) 
    }

    
//     queue의 값이 사라질때까지 반복문을 돌려야함
    while(queue.length > 0) {
//         첫번째 값과 cnt를 설정
        let first = queue[0]
        let cnt = 0
//         첫번째값을 뺐을때 0이거나 작다면 cnt 증가, shift()
//         첫번째값을 뺐을때 0보다 크면? 빼둔채로 break;
//         while문 조건 : 첫번째값이 0보다 크면 계속 반복을 시켜야하나?
        while(queue.length > 0 && queue[0] <= first) {
            cnt++
            queue.shift()
        }
        answer.push(cnt)
    }
    
    return answer;
}