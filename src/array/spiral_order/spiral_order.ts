export function spiralOrder(matrix: number[][]): number[] {
    // get the no of row and column.
    // start to move to first direction.
    // store array and test for collusion, if no collusion (need to store double collision count) loop until end of direction and change direction. If there is collision, change direction again if next move still have collision, consider it dead end


    return recrusive(matrix, 0, 0, [], 0)
};

function recrusive(matrix: number[][], activeRow = 0, activeColumn = 0, result = [], round: number): number[] {
    let row = matrix.length - activeRow;
    let column = matrix[0].length - activeColumn;

    if (round == 0 && row == 1 && column == 1) {
        return [matrix[0][0]]
    }

    // move right
    for (let c = 0; c < column - (round * 2); c++) {
        const element = matrix[activeRow][c + round]
        if (result.includes(element)) {
            return result
        }
        result.push(element)
        activeColumn = round == 0 ? c : c + round
    }

    // move down
    for (let r = 0; r < row - 1; r++) {
        const element = matrix[r + 1][activeColumn]
        if (result.includes(element)) {
            return result
        }
        result.push(element)
        activeRow = r + 1
    }

    // move left
    for (let c = 0; c < column - 1; c++) {
        const element = matrix[activeRow][column - c - 2]
        if (result.includes(element)) {
            return result
        }
        result.push(element)
        activeColumn = column - c - 2
    }

    // move up
    for (let r = 0; r < row - 2; r++) {
        const element = matrix[row - r - 2][activeColumn]
        if (result.includes(element)) {
            return result
        }
        result.push(element)
        activeRow = row - r - 2
    }

    if (matrix.length * matrix[0].length == result.length) {
        return result
    }

    round++
    return recrusive(matrix, activeRow, activeColumn, result, round)
}



