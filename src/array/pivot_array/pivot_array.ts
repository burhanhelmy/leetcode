

export function pivotIndex(nums: number[]): number {

    let leftSum = 0
    let rightSum = 0
    const total = nums.reduce((a, b) => a + b)
    for (let index = 0; index < nums.length; index++) {
        rightSum = total - (leftSum + nums[index])
        if (leftSum == rightSum) {
            return index
        }

        leftSum += nums[index]
    }

    return -1
};