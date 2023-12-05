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
    let count = 0;
    const heap = new MinHeap();
    scoville.forEach(el => heap.heappush(el));

    while(heap.getMin() < K && heap.size() > 1){
        count++;
        heap.heappush(heap.heappop() + heap.heappop()*2);
    }
    return heap.getMin() >= K ? count : -1;
}