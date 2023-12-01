function solution(n, arr1, arr2) {
    let answer = [];
    let binaryArr1 = []
    let binaryArr2 = []
    let resultArr = []
    
    for(let i = 0; i < n; i++) {
        binaryArr1.push(binary(arr1[i], n))
        binaryArr2.push(binary(arr2[i], n))
    }

    
    // 비교하는 함수
    for(let i = 0; i < n; i++) {
    let temp = ''
       for(let j = 0; j < n; j++) {
           if((+binaryArr1[i][j] || +binaryArr2[i][j])) {
               temp += '#'
           }
           else {
               temp += ' '
           }
       }
        resultArr.push(temp)
    }
    
    // 2진수로 변환 및 길이가 작다면 0으로 채워주는 함수
    function binary(num, leng) {
        let temp = []
    
        for(let i of num.toString(2)) {
            temp.push(i)
        }
        while(temp.length < leng) {
            temp.unshift(0)
        }
        return temp.join('')
    }
    
    return answer = resultArr;
}