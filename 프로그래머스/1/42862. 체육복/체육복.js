function solution(n, lost, reserve) {
    
    let answer = 0;
    
    // 체육복을 도난당하고 여벌이 없는 학생(여벌 받아야하는 학생)
    const noReserveLost = lost.sort((a,b)=>a-b).filter((lost) => !reserve.includes(lost));
    
    // 여벌이 있고 체육복을 도난당하지 않은 학생(빌려줄 수 있는 학생)
    let hasReserve = reserve.sort((a,b)=>a-b).filter((reverse) => !lost.includes(reverse));
    
    const finalLost = noReserveLost.filter((lost) => {
        
        // 첫번째로 체육복을 빌려줄 수 있는 사람 
        const lend = hasReserve.find((reserve) => Math.abs(reserve - lost) == 1);
        
        // 체육복 빌려줄 사람이 없으면 그대로 lost 리턴
        if(!lend) return lost;
        
        // 빌려준 사람 제외하기
        hasReserve = hasReserve.filter((reverse) => reverse !== lend);
    })
  
    // 답 = 전체 학생 수 - 체육복이 없는 학생 수 
    answer = n - finalLost.length;
    
    return answer;
}