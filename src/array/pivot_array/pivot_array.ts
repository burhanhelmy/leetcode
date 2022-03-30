

export function pivotIndex(arrayOfNumber: number[]): number {

    let leftSum = 0
    let rightSum = 0
    const total = arrayOfNumber.reduce((a, b) => a + b)
    for (let index = 0; index < arrayOfNumber.length; index++) {
        rightSum = total - (leftSum + arrayOfNumber[index])
        if (leftSum == rightSum) {
            return index
        }

        leftSum += arrayOfNumber[index]
    }

    return -1
};