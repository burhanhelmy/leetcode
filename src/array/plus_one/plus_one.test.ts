import { plusOne } from "./plus_one";


describe("plusOne", () => {
    it("for [1,2,3] should be [1,2,4]", () => {
        const arrayOfNumber = [1, 2, 3]
        expect(plusOne(arrayOfNumber)).toEqual([1, 2, 4])
    });

    it("for [4,3,2,1] should be [1,2,4]", () => {
        const arrayOfNumber = [4, 3, 2, 1]
        expect(plusOne(arrayOfNumber)).toEqual([4, 3, 2, 2])
    });

    it("for [9] should be [1,0]", () => {
        const arrayOfNumber = [9]
        expect(plusOne(arrayOfNumber)).toEqual([1, 0])
    });
    it("for [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3] should be [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]", () => {
        const arrayOfNumber = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
        expect(plusOne(arrayOfNumber)).toEqual([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4])
    });


})