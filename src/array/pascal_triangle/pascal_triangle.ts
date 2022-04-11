
// 5 should be [
//         [1],
//       [1, 1],
//     [1, 2, 1],
//    [1, 3, 3, 1],
//  [1, 4, 6, 4, 1]
// ]

export function pascalTriangle(numRows: number): number[][] {
    let answer: number[][] = []

    if (numRows >= 1) {
        answer.push([1])
    }

    for (let r = 1; r < numRows; r++) {
        let tempArray = []
        for (let c = 0; c < r + 1; c++) {
            const pointerOne = answer[r - 1] && answer[r - 1][c - 1] ? answer[r - 1][c - 1] : 0
            const pointerTwo = answer[r - 1][c] ? answer[r - 1][c] : 0
            tempArray.push(pointerOne + pointerTwo)
        }
        answer.push(tempArray)
    }
    return answer
};
