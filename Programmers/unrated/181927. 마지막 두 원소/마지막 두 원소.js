function solution(num_list) {
    let answer = [...num_list]
    let lastIdx = num_list.length - 1
    
    if(num_list[lastIdx] > num_list[lastIdx - 1]) {
        answer.push(num_list[lastIdx] - num_list[lastIdx - 1])
    }
    else {
        answer.push(num_list[lastIdx] * 2)
    }
    return answer;
}