function solution(new_id) {
    let answer = '';
    
    new_id = lowerCase(new_id)

    new_id = deleteSpecialSymbol(new_id)

    new_id = deleteDoubleDot(new_id)

    new_id = deleteFirstAndLastDot(new_id)

    new_id = empty(new_id)

    new_id = deleteLongerWord(new_id)

    new_id = insertWord(new_id)

    return answer = new_id;
}

//1~7단계를 수행하기위한 함수들

function lowerCase(id) { //1단계 : 대문자를 소문자로 치환
    return id.toLowerCase()
}

function deleteSpecialSymbol(id) {  //2단계 : 특정 문자만 허용
    return id.replace(/[^a-z0-9-_.]/g, '');
}

function deleteDoubleDot(id) {  //3단계 : 두번이상 연속된 점이라면 하나로 치환
    let cnt = 0
    let arr = []
    for(let i of id) {
        if(i === ".") { //.이라면
            cnt += 1    //cnt가 1증가
            if(cnt === 1) { //cnt가 1일때만 arr에 push
                arr.push(i)
            }
        }
        else {  //.이 아니라면
            cnt = 0
            arr.push(i)
        }
    }
return arr.join('')
}

function deleteFirstAndLastDot(id) {    //4단계 : 마침표가 처음이나 끝에 위치한것 제거
    id = id.split('')
    let max = id.length - 1
    console.log(max)
    if(id[0] === ".") {
        console.log("왜1 :", id[0])
        id.splice(0, 1)
        max = id.length - 1
    }
    if(id[max] === ".") {
        
        id.splice(max, 1)
    }
    return id.join('')
}

function empty(id) {    //5단계 : 빈 문자열이라면 a 대입
    if(id === "") {
        return "a"
    }
    else {
        return id
    }
}

function deleteLongerWord(id) { //6단계 : 16자 이상이면 다 제거, 제거후 끝 문자 .이면 제거
    id = id.split('')
    let leng = id.length
    if(leng < 16) {
        return id.join('')
    }
    else {
        id.splice(15, leng)
        if(id[14] === ".") {
            id.splice(14, 1)
        }
        return id.join('')
    }
}

function insertWord(id) { //7단계 : 2자 이하라면 마지막문자를 길이 3이 될때까지 추가
    id = id.split('')
    let len = id.length
    if(len < 3) {
        let lastWord = id[len - 1]
        while(len !== 3) {
            id.push(lastWord)
            len = id.length
        }
    }
    return id.join('')
}
    