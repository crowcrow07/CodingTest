function solution(answers) {
    let answer = [];
    let marking = {
        user1: [1, 2, 3, 4, 5],
        user2: [2, 1, 2, 3, 2, 4, 2, 5],
        user3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    };
    let correct = {user1: 0, user2: 0, user3: 0};

    answers.forEach((answer, idx) => {
        Object.keys(marking).forEach((user) => {
            if (answer === marking[user][idx % marking[user].length]) correct[user]++;
        });
    });


    let maxScore = Math.max(...Object.values(correct));
    

    Object.keys(correct).forEach((user, index) => {
        if (correct[user] === maxScore) {
            answer.push(index + 1); 
        }
    });

    return answer;
}
