function solution(n, m) {
    var answer = [];
    let temp = n * m
    
    while(m != 0) {
        [n, m] = [m, n % m]
    }
    answer.push(n, temp / n)

    return answer;
}