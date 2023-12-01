function solution(arr) {
    let answer = [];
    let newArr = [...arr]
    
    if(arr.length <= 1) {
        return [-1]
    }
    else {
        newArr.sort((a, b) => b - a)
    let number = newArr.pop()
    
    answer = arr.filter((v) => v !== number)
    return answer;
    }
    
}