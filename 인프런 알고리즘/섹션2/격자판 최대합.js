function solution(arr) {
  let answer;
  let max = 0;

  for (let i in arr) {
    let width = 0;
    let height = 0;
    for (let j in arr[i]) {
      width += arr[i][j];
      height += arr[j][i];
    }
    if (max < width && height < width) {
      max = width;
    } else if (max < height && width < height) {
      max = height;
    }
  }
  let diagonal = 0;
  let reverseDiagonal = 0;
  for (let i in arr) {
    diagonal += arr[i][i];
    reverseDiagonal += arr[i][arr.length - i - 1];
  }

  answer = Math.max(max, diagonal, reverseDiagonal);

  return answer;
}
let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
