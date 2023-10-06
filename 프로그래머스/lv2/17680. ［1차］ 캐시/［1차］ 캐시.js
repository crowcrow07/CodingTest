function solution(cacheSize, cities) {
    let answer = 0;
    let arr = []
    
    cities.forEach((x) => {
        x = x.toUpperCase()
        let pos = -1
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === x) {
                pos = i
            }
        }
        if(pos === -1) {
            arr.unshift(x);
            if(arr.length > cacheSize) {
                arr.pop()
            }
            answer += 5
        }
        else {


            arr.splice(pos, 1)
            arr.unshift(x)
            answer += 1
        }
    })
    
    return answer;
}

