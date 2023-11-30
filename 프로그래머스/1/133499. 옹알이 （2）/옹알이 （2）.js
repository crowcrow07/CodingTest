function solution(babbling) {
    let answer = 0;
    let possibleArr = ['aya', 'ye', 'woo', 'ma']
    
    // 연속해서 같은 발음 하는 언어 제거
    possibleArr.forEach((v) => {
        for(let i = 0; i < babbling.length; i++) {
            if(babbling[i].includes(v.repeat(2))) {
                babbling.splice(i, 1)
                i--
            }
        }
    })
    
    // 발음 하는 언어 공백으로 변경
    possibleArr.forEach((v) => {
        for(let i = 0; i < babbling.length; i++) {
            babbling[i] = babbling[i].replaceAll(v, ' ')
        }
    })

    // 공백을 없앴을때 length가 0이면 answer 증가
   babbling.forEach((_, i) => {
       babbling[i] = babbling[i].replaceAll(' ', '')
       if(babbling[i].length === 0) {
           answer++
       }
   })
    return answer;
}