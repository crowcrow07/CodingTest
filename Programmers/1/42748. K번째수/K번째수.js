function solution(array, commands) {
    let answer = [];
    
    for(let i of commands) {
        let arr = array.slice(i[0] - 1, i[1])
        for(let i = 0; i < arr.length - 1; i++) {
            let idx = i
            for(let j = i + 1; j < arr.length; j++) {
                if(arr[idx] > arr[j]) {
                    idx = j
                }
            }
            [arr[idx], arr[i]] = [arr[i], arr[idx]]
        }
        answer.push(arr[i[2] - 1])
    }
    
    return answer;
}