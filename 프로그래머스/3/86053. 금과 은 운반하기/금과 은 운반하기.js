// 필요한 금과 은 a와 b
// g는 금이 있는 도시
// s는 은이 있는 도시
// w는 트럭이 있는 도시이며 최대로 담을수있는 크기
// t는 그 트럭이 가는 편도 시간
function solution(a, b, g, s, w, t) {
    // 도시 길이
    const cityLen = g.length
    let start = 0
    let end = Number.MAX_SAFE_INTEGER
        
    // 이진 탐색-> log n이 나오게 함
    while( start <= end ){
        const mid = Math.floor((start + end) / 2)
        
        
        // 21, 0
        const [gMax, sMin] = findGmaxSet(mid)
        // 0, 21
        const [gMin, sMax] = findSmaxSet(mid)
        
        const passConstraint = (gMax >= a && sMax >= b && a + b <= gMax + sMin)
        
        if(passConstraint)
            end = mid - 1
        else {
            start = mid + 1
        }
            
        console.log(start, mid , end)
    }
    
   
    
    // 인자로 mid를 받음
    function findGmaxSet( time ){
        let gMax = 0
        let sMin = 0
        for(let i = 0; i < cityLen; i++){
            // 각 도시와 mid를 인자로 받음
            const [tmpG, tmpS] = calcGmaxSet( i, time)
            gMax += tmpG
            sMin += tmpS
        }
        return [gMax, sMin]
    }
    
    function findSmaxSet( time ){
        let sMax = 0
        let gMin = 0
        for(let i = 0; i < cityLen; i++){
            const [tmpG, tmpS] = calcSmaxSet( i, time)
            gMin += tmpG
            sMax += tmpS
        }
        return [gMin, sMax]
    }
    
    // 각 도시와 mid를 인자로 받음
    function calcGmaxSet( idx, time ){
        // mid / 왕복시간 -> 가능한 여행?
        // 각 도시에서 주어진 시간에 트럭이 몇번 왕복할수있는지 확인하기 위함
        const availableTrip = Math.round(time / (t[idx]*2))
        // 총 왕복횟수 * 트럭의 하중무게 -> 총 옮길수있는 양
        const totalAmount = availableTrip * w[idx]
        // 각 도시와 총 옮길수있는 양, 금이 잇는 도시의 배열을 인자로 넣는다.
        const gMax = calcMaxAmount( idx, totalAmount, g)
        // 금이 필요한 양보다 옮길수있는 양이 더 많으면 은을 담을수있다는 의미
        const sMin = gMax < totalAmount ? calcMaxAmount( idx, totalAmount - gMax, s) : 0
        return [gMax, sMin]
    }
    
    function calcSmaxSet( idx, time ){
        const availableTrip = Math.round(time / (t[idx]*2))
        const totalAmount = availableTrip * w[idx]
        const sMax = calcMaxAmount( idx, totalAmount, s)
        const gMin = sMax < totalAmount ? calcMaxAmount( idx, totalAmount - sMax, g) : 0
        return [gMin, sMax]
    }
        
    function calcMaxAmount( idx, totalAmount, category ){
        const amount = category[idx]
        if( amount >= totalAmount) return totalAmount
        else return amount
    }
    
    return start
}