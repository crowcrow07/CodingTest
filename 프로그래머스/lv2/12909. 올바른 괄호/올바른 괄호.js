function solution(s){
    let answer = true;
    let stack = []
    
    if(s[0] === ')') {
        return false
    }
    if(s[s.length - 1] === '(') {
        return false
    }

    for(let i of s) {
        if(i === '(') {
            stack.push(i)
        }
        else {
            if(stack.length === 0) {
                return false
            }
            stack.pop()
        }
    }
    if(stack.length > 0) {
        answer = false
    }

    return answer;
}