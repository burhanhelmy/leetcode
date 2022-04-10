

// [
//      ------>
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
//          <----------
// ]


export function spiralOrder(matrix: number[][]): number[] {
    return recursive(matrix, matrix.length, matrix[0].length, 0, [])
}

function recursive(matrix: number[][], noOfRow: number, noOfCol: number, round: number, result = []) {

    if (matrix.length == 0) {
        return result
    }

    if (noOfCol == 1 && noOfRow == 1) {
        result.push(matrix[round][round])
    }

    // move right
    for (let col = 0; col < noOfCol - 1; col++) {
        result.push(matrix[round][col + round])
    }

    // move down
    for (let row = 0; row < noOfRow - 1; row++) {
        // noOfCol - 1 is most right element
        result.push(matrix[row + round][noOfCol - 1 + round])
    }

    // move left
    for (let col = 0; col < noOfCol - 1; col++) {
        // noOfCol - 1 is most bottom right col index
        result.push(matrix[noOfRow - 1 + round][(noOfCol - 1) - col + round])
        // this to prevent collision for single row
        if (noOfRow == 1) {
            break
        }
    }

    // move up
    for (let row = 0; row < noOfRow - 1; row++) {
        result.push(matrix[(noOfRow - 1) - row + round][round])
        // this to prevent collision for single column
        if (noOfCol == 1) {
            break
        }
    }

    // after each operation, column and row should be reduce by 2 

    noOfCol -= 2
    noOfRow -= 2

    // result.length == matrix.length * matrix[0].length is to prevent
    // collusion when the row is 2 and is impossible to have duplications.
    if (result.length == matrix.length * matrix[0].length || noOfCol < 0 || noOfRow < 0) {
        return result
    }

    round++

    return recursive(matrix, noOfRow <= 0 ? 0 : noOfRow, noOfCol <= 0 ? 0 : noOfCol, round, result)
}





// NOTE: old approach, this is buggy

// export function spiralOrder(matrix: number[][]): number[] {
//     // get the no of row and column.
//     // start to move to first direction.
//     // store array and test for collusion, if no collusion (need to store double collision count) loop until end of direction and change direction. If there is collision, change direction again if next move still have collision, consider it dead end


//     return recrusive(matrix, 0, 0, [], 0)
// };

// function recrusive(matrix: number[][], activeRow = 0, activeColumn = 0, result = [], round: number): number[] {
//     let row = matrix.length - activeRow;
//     let column = matrix[0].length - activeColumn;

//     if (round == 0 && row == 1 && column == 1) {
//         return [matrix[0][0]]
//     }

//     // move right
//     for (let c = 0; c < column - (round * 2); c++) {
//         const element = matrix[activeRow][c + round]
//         if (result.includes(element)) {
//             return result
//         }
//         result.push(element)
//         activeColumn = round == 0 ? c : c + round
//     }

//     // move down
//     for (let r = 0; r < row - 1; r++) {
//         const element = matrix[r + 1][activeColumn]
//         if (result.includes(element)) {
//             return result
//         }
//         result.push(element)
//         activeRow = r + 1
//     }

//     // move left
//     for (let c = 0; c < column - 1; c++) {
//         const element = matrix[activeRow][column - c - 2]
//         if (result.includes(element)) {
//             return result
//         }
//         result.push(element)
//         activeColumn = column - c - 2
//     }

//     // move up
//     for (let r = 0; r < row - 2; r++) {
//         const element = matrix[row - r - 2][activeColumn]
//         if (result.includes(element)) {
//             return result
//         }
//         result.push(element)
//         activeRow = row - r - 2
//     }

//     if (matrix.length * matrix[0].length == result.length) {
//         return result
//     }

//     round++
//     return recrusive(matrix, activeRow, activeColumn, result, round)
// }



