class MinHeap {
    constructor() {
        this.heap = [null]
    }
    
    size() {
        return this.heap.length - 1
    }
    
    getMin() {
        return this.heap[1] ?? null
    }
    
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
    }
    
    heappush(value) {
        this.heap.push(value)
        let curIdx = this.heap.length - 1
        let parIdx = (curIdx / 2) >> 0
        
        while(curIdx > 1 && this.heap[curIdx] < this.heap[parIdx]) {
            this.swap(curIdx, parIdx)
            curIdx = parIdx
            parIdx = (curIdx / 2) >> 0
        }
    }
    
    heappop() {
        const min = this.heap[1]
        if(this.heap.length <= 2) this.heap = [null]
        else this.heap[1] = this.heap.pop()
        
        let curIdx = 1
        let leftIdx = curIdx * 2
        let rightIdx = curIdx * 2 + 1
        
        if(!this.heap[leftIdx]) return min;
        if(!this.heap[rightIdx]) {
            if(this.heap[curIdx] > this.heap[leftIdx]) {
                this.swap(curIdx, leftIdx)
            }
            return min
        }
        
        
        while(this.heap[leftIdx] < this.heap[curIdx] || this.heap[rightIdx] < this.heap[curIdx]) {
            let minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx
            this.swap(curIdx, minIdx)
            curIdx = minIdx
            leftIdx = curIdx * 2
            rightIdx = curIdx * 2 + 1
        }
        return min
    }
}


function solution(scoville, K) {
    let answer = 0;
    let sum = 0
    const minheap = new MinHeap()
    
    for(let i of scoville) {
        minheap.heappush(i)
    }
    
    if(minheap.getMin() >= K) return 0
    
    while(minheap.size() > 0) {
        let minA = minheap.heappop()
        let minB = minheap.heappop()
        
        if(minA > K) return answer
        else {
            let sum = minA + (minB * 2)
            answer++
            minheap.heappush(sum)
            if(minheap.getMin() >= K) return answer
            if(minheap.size() === 1) {
                return K <= sum ? answer : -1
            }
        }
    }
    
    
   
    
    // 종료 조건 : scoville length가 0이 될때?
    // minheap.heappop 해서 K 보다 높으면 바로 answer 배열에 push -> 
    // 아니라면 minheap.heappop 2번 해서 더한다음에 K보다 높으면 answer 배열에 push하고 minheap에도 push
    // 아니라면 minheap 에 다시 push
    
    return -1;
}