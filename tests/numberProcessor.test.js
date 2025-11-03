const {calculateSum,findLowest,findAverage,findHighest} = require("../src/numberProcessor")
const fs = require("fs");


const wholeNums = "./test-data/whole-numbers.txt"
const integers = "./test-data/integers.txt"
const floats = "./test-data/floating.txt"

describe('Set up (IO/validation)', () => {
    //Because of how windows does new lines
    const WHOLE = "1\r\n2\r\n3\r\n4\r\n5"
    const INTS = "-2\r\n-1\r\n0\r\n1\r\n2"
    const FLOATS = "0.8\r\n0.9\r\n1.0\r\n1.1\r\n1.2"

    test('Testing whole number file',() => {
        let res = fs.readFileSync(wholeNums,'utf8')
        expect(res).toEqual(WHOLE)
    })
    test('Testing integer file',() => {
        let res = fs.readFileSync(integers,'utf8')
        expect(res).toEqual(INTS)
    })
    test('Testing floating point file',() => {
        let res = fs.readFileSync(floats,'utf8')

        expect(res).toEqual(FLOATS)
    })
})

describe('Tests for calculateSum()', () => {
    test('Test for whole numbers', () => {
        let res = calculateSum(wholeNums)
        expect(res).toBe(15)
    })
    test('Test for integers', () => {
        let res = calculateSum(integers)
        expect(res).toBe(0)
    })
    test('Test for floating point numbers', () => {
        let res = calculateSum(floats)
        expect(res).toBe(5)
    })
});
describe('Tests for findLowest()', () => {
    test('Test for whole numbers', () => {
        let res = findLowest(wholeNums)
        expect(res).toBe(1)
    })
    test('Test for integers', () => {
        let res = findLowest(integers)
        expect(res).toBe(-2)
    })
    test('Test for floating point numbers', () => {
        let res = findLowest(floats)
        expect(res).toBe(0.8)
    })
});
describe('Tests for findHighest()', () => {
    test('Test for whole numbers', () => {
        let res = findHighest(wholeNums)
        expect(res).toBe(5)
    })
    test('Test for integers', () => {
        let res = findHighest(integers)
        expect(res).toBe(2)
    })
    test('Test for floating point numbers', () => {
        let res = findHighest(floats)
        expect(res).toBe(1.2)
    })

});
describe('Tests for findAverage()', () => {
    test('Test for whole numbers', () => {
        let res = findAverage(wholeNums)
        expect(res).toBe(3)
    })
    test('Test for integers', () => {
        let res = findAverage(integers)
        expect(res).toBe(0)
    })
    test('Test for floating point numbers', () => {
        let res = findAverage(floats)
        expect(res).toBe(1)
    })

});


