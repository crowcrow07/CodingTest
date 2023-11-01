function solution(a, b, c, d) {
    let answer = 0;
    let cnt = 0
    let dice = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}
    
    dice[a]++
    dice[b]++
    dice[c]++
    dice[d]++
    
    for(let i in dice) {
        if(dice[i] === 4) {
            return 1111 * i
        }
        else if(dice[i] === 3) {
            let max = i
            let min = 0
            for(let j in dice) {
                if(dice[j] === 1) {
                    min = +j
                    return (10 * max + min) ** 2
                }
            }
        }
        else if(dice[i] === 2) {
            let firstNum = +i
            let secondNum = 0
            let otherNum = []
            for(let j in dice) {
                if(dice[j] === 2 && j !== i) {
                    secondNum = +j
                    return (firstNum + secondNum) * (Math.abs(firstNum - secondNum))
                }
            }
            for(let z in dice) {
                if(dice[z] === 1) {
                    otherNum.push(+z)
                }
            }
            return otherNum.reduce((a, b) => a * b)
        }
    }
    
    
    
    
    return answer = Math.min(a, b, c, d);
}