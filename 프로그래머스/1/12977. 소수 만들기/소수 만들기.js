function checkPrime(target) {
    for (let i = 3; i <= Math.sqrt(target); i+=2) {
        if (target % i === 0) return false;
    }
    return true;
}

function solution(nums) {
    let answer = 0;

    for(let i = 0; i < nums.length - 2; i++) {
        for(let j = i + 1; j < nums.length - 1; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                let target = nums[i] + nums[j] + nums[k];
                if(target % 2 !== 0 && checkPrime(target)) {
                    answer++;
                }
            }
        }
    }
    
    return answer;
}