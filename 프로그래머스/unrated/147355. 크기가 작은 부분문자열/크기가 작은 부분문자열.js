function solution(t, p) {
    let answer = 0;
    let p_leng = p.length
    let sliceT = ''
    let cnt = 0
    let result = 0
    
    for(let i = 0; i < t.length; i++) {
        sliceT = t.slice(i, p_leng + cnt) 
        if(sliceT.length < p_leng) {
            console.log('작동함?')
            break;
        }
        else {
            if(+sliceT <= +p) {
                result += 1
                console.log('hi')
            }
            cnt += 1
            
        }

    }
    
    
    return answer = result;
}