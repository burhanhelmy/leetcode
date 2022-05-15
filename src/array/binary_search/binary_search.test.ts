
import { binarySearch } from "./binary_search";
it("index should be 3", function () {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 4)).toEqual(3);
});
