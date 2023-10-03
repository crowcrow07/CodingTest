function solution(code) {
    if(code.length === 0) return "EMPTY"
    
    let answer = '';
     let mode = 0
    for(let i = 0; i < code.length; i++) {
        if(code[i] === '1') {
            if(mode === 0) mode = 1
            else mode = 0
        }
        else if(mode === 0 && code[i] !== '1') {
            if(i % 2 === 0) {
                answer += code[i]
            }
        }
        else if(mode === 1 && code[i] !== '1') {
            if(i % 2 === 1) {
                answer += code[i]
            }
        }
    }
    if(answer.length === 0) return 'EMPTY'
    return answer;
}