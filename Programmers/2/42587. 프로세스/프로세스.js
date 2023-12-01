function solution(priorities, location) {
    let answer = 0;
    
    const arr = priorities.map((process, i) => {return {process, i}})
    
    while(arr.length) {
        const queue = arr.shift();
        if(arr.some((v) => v.process > queue.process)) {
            arr.push(queue);
        }
        else {
            answer++
            if(location === queue.i) break;
        }
    }
    
    return answer;
}


