export function dominantIndex(arrayOfNumber: number[]): number {
    let largestNumberIndex = 0

    for (let index = 0; index < arrayOfNumber.length; index++) {
        if (arrayOfNumber[index] > arrayOfNumber[largestNumberIndex]) {
            largestNumberIndex = index
        }
    }

    for (let index = 0; index < arrayOfNumber.length; index++) {
        const element = arrayOfNumber[index];
        if (index != largestNumberIndex && arrayOfNumber[largestNumberIndex] < (element * 2)) {
            return -1
        }
    }
    return largestNumberIndex;
};