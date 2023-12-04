function solution(a, b) {

    
    return add(a, b) < add(b, a) ? add(b, a) : add(a, b)
    

}

function add(a, b) {
    let temp = ''
    temp += a
    temp += b
    return +temp
}