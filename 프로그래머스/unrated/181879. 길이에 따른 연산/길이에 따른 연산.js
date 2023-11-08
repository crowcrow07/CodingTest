function solution(num_list) {
    let answer = 0;
    
    if(10 < num_list.length) {
        answer = num_list.reduce((a, b) => a + b, 0)
    }
    else {
        answer = num_list.reduce((a, b) => a * b, 1)
    }
    return answer;
}