function solution(my_string, overwrite_string, s) {
    let answer = '';
    let n = overwrite_string.length
    
    let arr = my_string.split('')
    
    arr.splice(s, n, overwrite_string)
    answer = arr.join('')
    return answer;
}