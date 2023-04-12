function solution(nums) {
    let answer = 0;
    let choose = nums.length / 2
    let mon = []
    
    for(let i of nums) {
        if(mon.includes(i) === false) {
            mon.push(i)
        }
    }
    console.log(mon, choose)
    
    if(mon.length > choose) {
        answer = choose
    }
    else {
        answer = mon.length
    }
    
    return answer;
}