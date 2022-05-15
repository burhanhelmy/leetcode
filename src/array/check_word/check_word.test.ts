import { checkWord } from "./check_word";

const testBoard = [
    ["E", "A", "R", "A"],
    ["N", "L", "E", "C"],
    ["I", "A", "I", "S"],
    ["B", "Y", "O", "R"]
];

it("C", function () {
    expect(checkWord(testBoard, "C")).toEqual(true);
});

it("EAR", function () {
    expect(checkWord(testBoard, "EAR")).toEqual(true);
});

it("EARS", function () {
    expect(checkWord(testBoard, "EARS")).toEqual(false);
});

it("BAILER", function () {
    expect(checkWord(testBoard, "BAILER")).toEqual(true);
});

it("RSCAREIOYBAILNEA", function () {
    // "Must be able to check indefinite word lengths going in all directions"
    expect(checkWord(testBoard, "RSCAREIOYBAILNEA")).toEqual(true);
});

it("CEREAL", function () {
    // "Valid guesses can't overlap themselves"
    expect(checkWord(testBoard, "CEREAL")).toEqual(false);
});
it("ROBES", function () {
    // "Valid guesses have to be adjacent"
    expect(checkWord(testBoard, "ROBES")).toEqual(false);
});
it("BAKER", function () {
    // "All the letters have to be in the board"
    expect(checkWord(testBoard, "BAKER")).toEqual(false);
});
it("CARS", function () {
    // "Valid guesses cannot wrap around the edges of the board"
    expect(checkWord(testBoard, "CARS")).toEqual(false);
});
