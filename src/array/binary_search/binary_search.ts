export function binarySearch(list: number[], target: number): number {

    let start = 0
    let end = list.length - 1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (list[mid] == target) {
            return mid
        }
        else if (list[mid] < target) {
            start = mid + 1
        }
        else {
            end = mid - 1
        }
    }

    return null

}