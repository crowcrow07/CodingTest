function solution(N, stages) {
    let stageRatio = [];
    let users = stages.length;

    for(let i = 1; i <= N; i++) {
        let noClear = stages.filter((user) => i === user).length;
        let ratio = noClear/users;
        users -= noClear;
        stageRatio.push({stage:i, ratio:ratio});
    }

    stageRatio.sort((a, b) => {
        if(a.ratio === b.ratio) return a.stage - b.stage;
        else return b.ratio - a.ratio;
    });

    return stageRatio.map(obj => obj.stage);
}