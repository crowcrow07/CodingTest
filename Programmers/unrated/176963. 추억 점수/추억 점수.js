function solution(name, yearning, photoes) {
    let answer = [];
    let obj = {}
    
    for(let i = 0; i < name.length; i++) {
        obj[name[i]] = yearning[i]
    }
    
    photoes.forEach((photo) => {
        let point = 0
        for(let i in obj) {
            for(let j of photo) {
                if(i === j) {
                    point += obj[i]
                }
            }
        }
        answer.push(point)
    })
    
    return answer;
}