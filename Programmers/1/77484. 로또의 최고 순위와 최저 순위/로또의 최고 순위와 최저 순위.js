function solution(lottos, win_nums) {
    let answer = [];
    
    // 최저 순위
    answer.push(lottoGrade(lottos, win_nums))
    
    // 0을 -1로 변환
    lottos = lottos.map((v, i) => {
        if(v === 0) {
            return lottos[i] = -1
        }
        return v
    })
    
    // 최고 순위
    answer.unshift(lottoGrade(lottos, win_nums))
    
    return answer;
}

// 로또 순위 책정
function lottoGrade(arr, win_nums) {
    let correct = [...win_nums]
    
    for(let i = 0; i < arr.length; i++) {
        if(win_nums.includes(arr[i])) {
            correct.splice(correct.indexOf(arr[i]), 1)
        }
        if(arr[i] === -1) {
            correct.splice(correct.indexOf(arr[i]), 1)
        }
    }

    if(correct.length > 5) {
        return correct.length
    }
    return correct.length + 1
}