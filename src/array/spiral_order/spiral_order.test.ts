import { spiralOrder } from "./spiral_order";

it("for [4,3,2,1] should be [1,2,4]", () => {
    const arrayOfNumber = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    expect(spiralOrder(arrayOfNumber)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])
});
it("for [[1,2,3,4],[5,6,7,8],[9,10,11,12]] should be [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]", () => {
    const arrayOfNumber = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
    expect(spiralOrder(arrayOfNumber)).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7])
});
it("for [[1]] should be [1]", () => {
    const arrayOfNumber = [[1]]
    expect(spiralOrder(arrayOfNumber)).toEqual([1])
});
it("for [[3],[2]] should be [3,2]", () => {
    const arrayOfNumber = [[3], [2]]
    expect(spiralOrder(arrayOfNumber)).toEqual([3, 2])
});
it("for [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]] should be [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]", () => {
    const arrayOfNumber = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
    expect(spiralOrder(arrayOfNumber)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10])
});