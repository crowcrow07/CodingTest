function solution(dartResult) {
    let answer = 0;
    let firstNum = null;
    let secondNum = null;
    let check = true
    let stack = [];
    
    dartResult.split('').forEach((v, i) => {
        let value = v
        if(dartResult[i - 2] === '1' && dartResult[i - 1] === '0') {
            value = 10
        }
        if(v === 'S') {
            if(check) {
                if(firstNum !== null) {
                    stack.push(+firstNum)
                }    
                if(value === 10) {
                    firstNum = 10
                    check = false
                }
                else {
                    firstNum = dartResult[i - 1]
                    check = false
                }
            }
            else {
                if(secondNum !== null) {
                    stack.push(+secondNum)
                }
                if(value === 10) {
                    secondNum = 10
                    check = false
                }
                else {
                    secondNum = dartResult[i - 1]
                    check = true
                }
            }
        }
        else if(v === 'D') {

            if(check) {
                if(firstNum !== null) {
                    stack.push(+firstNum)
                }
                if(value === 10) {
                    firstNum = 10 ** 2
                    check = false
                }
                else {
                    firstNum = (+dartResult[i - 1]) ** 2
                    check = false
                }
            }
            else {
                if(secondNum !== null) {
                    stack.push(+secondNum)
                }
                if(value === 10) {
                    secondNum = 10 ** 2
                    check = true
                }
                else {
                    secondNum = (+dartResult[i - 1]) ** 2
                    check = true
                }
            }
        }
        else if(v === 'T') {
            if(check) {
                if(firstNum !== null) {
                    stack.push(+firstNum)
                }
                if(value === 10) {
                    firstNum = 10 ** 3
                    check = false
                }
                else {
                    firstNum = (+dartResult[i - 1]) ** 3
                    check = false
                }
            }
            else {
                if(secondNum !== null) {
                    stack.push(+secondNum)
                }
                if(value === 10) {
                    secondNum = 10 ** 3
                    check = true
                }
                else {
                    secondNum = (+dartResult[i - 1]) ** 3
                    check = true
                }
            }
        }
        else if(v === '*') {
            if(firstNum !== null) {
                firstNum *= 2
            }
            if(secondNum !== null) {
                secondNum *= 2
            }
        }
        else if(v === '#') {
            if(!check) {
                if(firstNum !== null) {
                    firstNum *= -1
                    check = false
                }    
            }
            else {
                if(secondNum !== null) {
                    secondNum *= -1
                    check = true
                }
            }
        }
    })
    stack.push(+firstNum, +secondNum)
    answer = stack.reduce((a, b) => a + b, 0)
    return answer;
}