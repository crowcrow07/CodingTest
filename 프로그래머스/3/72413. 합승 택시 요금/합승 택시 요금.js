function solution(n, s, a, b, fares) {
    
    
    // n개 노드에 대해 모든 정점(n개)으로 향하는 DP배열
    // 초기값은 Infinity(최단경로없음)으로 설정
    const board = new Array(n).fill().map(_ => new Array(n).fill(Infinity));

    // 자기 자신에 대한 최단 경로는 0으로 설정
    for(let i = 0; i < n; i++) {
        board[i][i] = 0;
    }

    // 주어진 연결 정보로 DP 배열 초기화
    fares.forEach(pos => {
        const [x, y, weight] = pos;
    // x에서 y로 향하는 최단경로(최소요금) = weight
        board[x-1][y-1] = weight;
        board[y-1][x-1] = weight;
    });
    // console.log(board)
    
    // k는 경유노드, i는 시작노드, j는 도착노드
    for(let k = 0; k < n; k++) {
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                if(board[i][k] + board[k][j] < board[i][j])
                    board[i][j] = board[i][k] + board[k][j];
            }
        }
    }
    
    // 기본 answer = 두 사람이 따로 가는 경우
    let answer = board[s-1][a-1] + board[s-1][b-1];
    
    for(let i = 0; i < n; i++) {
        const shortest = board[s-1][i] + board[i][a-1] + board[i][b-1];
        // 기존값과 새로 계산된 값 중 더 작은 값으로 갱신
        answer = Math.min(answer, shortest);
    }
                  
    return answer;
}