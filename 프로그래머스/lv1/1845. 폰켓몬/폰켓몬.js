function solution(nums) {
    let answer = 0;
    let select = nums.length / 2
    
    let nH = new Map()
    
    for(let i of nums) {
        if(nH.has(i)) {
            nH.set(i, nH.get(i) + 1)
        }
        else {
            nH.set(i, 1)
        }
    }
    console.log(nH.size, select)
    
    if(nH.size <= select) {
        answer = nH.size
    }
    else {
        answer = select
    }
    
    return answer;
}