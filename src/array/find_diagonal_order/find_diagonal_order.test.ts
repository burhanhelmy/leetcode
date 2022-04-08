
import { findDiagonalOrder } from "./find_diagonal_order";

describe("findDiagonalOrder", () => {
    it("for [[1,2,3],[4,5,6],[7,8,9]] should be [1,2,4,7,5,3,6,8,9]", () => {
        const arrayOf2dNumber = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
        expect(findDiagonalOrder(arrayOf2dNumber)).toEqual([1, 2, 4, 7, 5, 3, 6, 8, 9])
    });
    it("for [[1,2],[3,4]] should be [1,2,3,4]", () => {
        const arrayOf2dNumber = [[1, 2], [3, 4]]
        expect(findDiagonalOrder(arrayOf2dNumber)).toEqual([1, 2, 3, 4])
    });
    it("for [[2,3]] should be [[2,3]]", () => {
        const arrayOf2dNumber = [[2, 3]]
        expect(findDiagonalOrder(arrayOf2dNumber)).toEqual([2, 3])
    });
    it("for [[2,5],[8,4],[0,-1]] should be [2,5,8,0,4,-1]", () => {
        const arrayOf2dNumber = [[2, 5], [8, 4], [0, -1]]
        expect(findDiagonalOrder(arrayOf2dNumber)).toEqual([2, 5, 8, 0, 4, -1])
    });


})