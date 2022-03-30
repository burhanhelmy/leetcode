import { dominantIndex } from "./dominant_index";


describe("dominantIndex", () => {
    it("for [3,6,1,0] should be 1", () => {
        const arrayOfNumber = [3, 6, 1, 0]
        expect(dominantIndex(arrayOfNumber)).toEqual(1)
    });

    it("for [1,2,3,4] should be -1", () => {
        const arrayOfNumber = [1, 2, 3, 4]
        expect(dominantIndex(arrayOfNumber)).toEqual(-1)
    });

    it("for [1] should be -1", () => {
        const arrayOfNumber = [1]
        expect(dominantIndex(arrayOfNumber)).toEqual(0)
    });
})