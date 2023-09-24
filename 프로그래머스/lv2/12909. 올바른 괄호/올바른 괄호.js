function solution(s) {
    let stack = [];

    for (let i of s) {
        if (i === '(') {
            stack.push(i);
        } else if (i === ')' && stack.length > 0) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
}
