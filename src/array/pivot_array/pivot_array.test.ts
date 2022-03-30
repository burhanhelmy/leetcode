import { pivotIndex } from "./pivot_array";


describe("pivotIndex", () => {
    it("for [1, 7, 3, 6, 5, 6] should be 3", () => {
        const arrayOfNumber = [1, 7, 3, 6, 5, 6]
        expect(pivotIndex(arrayOfNumber)).toEqual(3)
    });
})