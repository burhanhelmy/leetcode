
// //  [1, 2, 3],
// //  [4, 5, 6],
// //  [7, 8, 9]

export function findDiagonalOrder(arrayOf2dNumber: number[][]): number[] {
    let result = []

    if (arrayOf2dNumber == null) {
        return result;
    }

    let r = arrayOf2dNumber.length
    let c = arrayOf2dNumber[0].length


    for (let dRow = 0; dRow < r + c - 1; dRow++) {

        let i = dRow < c ? 0 : dRow - c + 1;
        let j = dRow < c ? dRow : c - 1;

        let tempArray = []

        while (i < r && j > -1) {
            tempArray.push(arrayOf2dNumber[i][j])
            i++
            j--
        }

        if (!(dRow % 2)) {
            tempArray.reverse()
        }
        result = [...result, ...tempArray]
    }

    return result
}




