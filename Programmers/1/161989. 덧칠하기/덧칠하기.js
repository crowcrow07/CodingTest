function solution(n, m, section) {
    let answer = 0;
    let arr = Array.from({length : n}, (_, i) => i++ + 1)
    
    for(let i = 0; i < arr.length; i++) {
        if(section[0] === arr[i]) {
            section.shift()
            answer++
            for(let j = i; j < i + m; j++) {
                if(section[0] === arr[j]) {
                    section.shift()
                }
            }
        }
    }
    return answer;
}