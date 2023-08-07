// 왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다. 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
// 아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.
// 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시 오.


function solution(arr){
    let answer, sum = 0
    let spy = []
    // for(let i of arr) {
    //     // 7명인 배열을 여러개 만들어낸다.
    //     // 거기서 합이 100개인것을 가려낸다.
    //     // 위 가정은 잘못됐다.

    //     // arr의 총 합을 구하고 요소의 2개만을 꺼내서 더한뒤 뺐을때의 100이 나온 값을 찾으면 된다.
    //     sum += i
    // }

    sum = arr.reduce((a, b) => a + b, 0)

    let temp = 0
    let flag = 0
    for (let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            temp = arr[i] + arr[j]

            if(sum - temp === 100) {
                temp = 0
                spy.push(arr[i], arr[j])
                flag = 1
                break;
            }
            else {
                temp = 0
            }
        }
        if(flag === 1) {
            break
        }
    }

    console.log(spy)

    answer = arr.filter((v) => {
        console.log('hi')
        return v !== spy[0] && v !== spy[1]
    })

    return answer;
}

let arr=[21, 7, 22, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));