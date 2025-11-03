/**
 * In tests/textAnalyzer.test.js, create unit tests that test that you can:
 *
 * Count the total number of words
 * Find the longest word
 * Count how many lines the file has
 */

const fs = require('fs')
const {countWords, findLongestWord,countLines} = require('../src/textAnalyzer')

const niceFile = "./test-data/nice.txt"
const uglyFile = "./test-data/ugly.txt"
const multiLineFile = "./test-data/multiline.txt"

describe('Set up (IO/validation)', () => {
    const NICE = "This is a nicely formatted test string"
    const UGLY = "This is a     poorly   formatted  test string"
    //Because of how windows does new lines
    const MULTILINE = "This\r\nis\r\na\r\nmany\r\nline\r\nformatted\r\ntest\r\nstring"

    describe('Test to ensure file IO is working properly', () => {
        test('Testing nice file',() => {
            let res = fs.readFileSync(niceFile,'utf8')
            expect(res).toEqual(NICE)
        })
        test('Testing ugly file',() => {
            let res = fs.readFileSync(uglyFile,'utf8')
            expect(res).toEqual(UGLY)
        })
        test('Testing multiline file',() => {
            let res = fs.readFileSync(multiLineFile,'utf8')

            expect(res).toEqual(MULTILINE)
        })
    })
})

describe('Tests for countWords()', () => {
    test('Test on a normal string', () => {
        const result = countWords(niceFile)
        expect(result).toBe(7)
    })
    test('Test on a ugly string', () => {
        const result = countWords(uglyFile)
        expect(result).toBe(7)
    })
    test('Test on a multiline string', () => {
        const result = countWords(multiLineFile)
        expect(result).toBe(8)
    })
});
describe('Tests for findLongestWord()', () => {
    test('Test on a normal string', () => {
        const result = findLongestWord(niceFile)
        expect(result).toBe("formatted")
    })
    test('Test on a ugly string', () => {
        const result = findLongestWord(uglyFile)
        expect(result).toBe("formatted")
    })
    test('Test on a multiline string', () => {
        const result = findLongestWord(multiLineFile)
        expect(result).toBe("formatted")
    })
});
describe('Tests for countLines()', () => {
    test('Test on a normal string', () => {
        const result = countLines(niceFile)
        expect(result).toBe(1)
    })
    test('Test on a ugly string', () => {
        const result = countLines(uglyFile)
        expect(result).toBe(1)
    })
    test('Test on a multiline string', () => {
        const result = countLines(multiLineFile)
        expect(result).toBe(8)
    })
});