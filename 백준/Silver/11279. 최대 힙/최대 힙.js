const fs = require("fs");
const [n, ...arr] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  getMax() {
    return this.heap[1] ?? null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  heappush(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = (curIdx / 2) >> 0;

    while (curIdx > 1 && this.heap[curIdx] > this.heap[parIdx]) {
      this.swap(curIdx, parIdx);
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }

  heappop() {
    const max = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return max;
    if (!this.heap[rightIdx]) {
      if (this.heap[curIdx] < this.heap[leftIdx]) {
        this.swap(curIdx, leftIdx);
      }
      return max;
    }
    
    while (
      this.heap[curIdx] < this.heap[leftIdx] ||
      this.heap[curIdx] < this.heap[rightIdx]
    ) {
      let maxIdx =
        this.heap[leftIdx] < this.heap[rightIdx] ? rightIdx : leftIdx;
      this.swap(maxIdx, curIdx);
      curIdx = maxIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }
    return max;
  }
}

function solve(arr) {
  let answer = [];
  const maxheap = new MaxHeap();
  arr.forEach((num) => {
    if (num !== 0) maxheap.heappush(num);
    else {
      maxheap.size() ? answer.push(maxheap.heappop()) : answer.push(0);
    }
  });
  return answer.join("\n");
}

console.log(solve(arr));