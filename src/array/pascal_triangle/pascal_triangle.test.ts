import { pascalTriangle } from "./pascal_triangle";

it("for 5 should be [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]", () => {
    expect(pascalTriangle(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]])
});
it("for 1 should be [[1]]", () => {
    expect(pascalTriangle(5)).toEqual([[1]])
});
it("for 0 should be []", () => {
    expect(pascalTriangle(5)).toEqual([])
});