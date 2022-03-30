export function plusOne(arrayOfNumber: number[]): number[] {

    let stringNumber = ""

    arrayOfNumber.forEach(element => {
        stringNumber = stringNumber + String(element)
    });

    // BigInt is used to handle The MAX_SAFE_INTEGER constant has a value of 9007199254740991 
    const newValue = BigInt(stringNumber) + BigInt(1)

    return Array.from(String(newValue), num => Number(num));

};