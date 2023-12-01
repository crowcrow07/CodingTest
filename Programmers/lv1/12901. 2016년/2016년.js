function solution(a, b) {
    let answer = '';
    let day = ['THU' ,'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED']
    let cnt = 0
    let DayofMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    let sumDay = 0  //총 날짜
    //5월 24일
    for(let i = 0; i < a - 1; i++) {
        sumDay += DayofMonth[i]
    }
    
    sumDay += b
    
    cnt = sumDay % 7
    
    answer = day[cnt]
    
    return answer;
}