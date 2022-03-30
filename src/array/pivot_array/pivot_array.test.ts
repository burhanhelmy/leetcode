import { pivotIndex } from "./pivot_array";


describe("pivotIndex", () => {
    it("for [1, 7, 3, 6, 5, 6] should be 3", () => {
        const arrayOfNumber = [1, 7, 3, 6, 5, 6]
        expect(pivotIndex(arrayOfNumber)).toEqual(3)
    });

    it("for [1,2,3] should be -1", () => {
        const arrayOfNumber = [1, 2, 3]
        expect(pivotIndex(arrayOfNumber)).toEqual(-1)
    });

    it("for [2,1,-1] should be 0", () => {
        const arrayOfNumber = [2, 1, -1]
        expect(pivotIndex(arrayOfNumber)).toEqual(0)
    });
})