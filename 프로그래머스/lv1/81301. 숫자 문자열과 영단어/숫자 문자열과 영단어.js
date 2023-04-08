function solution(s) {
    let answer = '';
    let temp = ''
    let result = ''
    
    //순서대로 가져와야할것
    //replace를 쓰면 순서대로 가져오지않는다...
    //단어를 하나하나 가져온다 그 단어가 영단어와 일치하거나 숫자라면 바로 changeNum으로 보낸다.
   
    for(let i of s) {
        temp += i
        result = changeNum(temp)
        //result에 1이 들어왔다면 answer에 추가하고 temp를 다시 ''로 진행
        if(result !== '') {
            temp = ''
            answer += result
        }
    }
    
    console.log(answer)
    
    return +answer;
}


function changeNum (data) {
    if(data === 'zero' || data === '0') {
        return '0'
    }
    else if(data === 'one' || data === '1') {
        return '1'
    }
    else if(data === 'two' || data === '2') {
        return '2'
    }
    else if(data === 'three' || data === '3') {
        return '3'
    }
    else if(data === 'four' || data === '4') {
        return '4'
    }
    else if(data === 'five' || data === '5') {
        return '5'
    }
    else if(data === 'six' || data === '6') {
        return '6'
    }
    else if(data === 'seven' || data === '7') {
        return '7'
    }
    else if(data === 'eight' || data === '8') {
        return '8'
    }
    else if(data === 'nine' || data === '9') {
        return '9'
    }
    else  {
        return ''
    }
}