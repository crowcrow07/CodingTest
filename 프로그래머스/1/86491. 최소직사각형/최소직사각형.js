function solution(sizes) {
    let answer = 0;
    let cardSizes = [...sizes]
    
    const {maxWidth, maxHeight} = maxCardSizeCalculate(cardSizes);
    
    answer = maxWidth * maxHeight
    
    return answer;
}

function maxCardSizeCalculate(cardSizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    cardSizes.forEach((size) => {
        if(size[0] < size[1]) [size[0], size[1]] = [size[1], size[0]]
        if(size[0] > maxWidth) maxWidth = size[0]
        if(size[1] > maxHeight) maxHeight = size[1]
    })
    return {maxWidth, maxHeight}
}