/**
 * In src/textAnalyzer.js script that reads a text file and analyzes it. Create functions that do the following:
 *
 * Count the total number of words
 * Find the longest word
 * Count how many lines the file has
 * 💡 So that you can easily create unit tests, you should create different functions for each of these and return the result from the function.
 */

const quotes = "../data/quotes.txt"
const sampleText = "../data/sample-text.txt"

const fs = require('fs');

function countWords(file) {
    let str = fs.readFileSync(file, 'utf8').trim();
    //Empty file = no words
    //Count the spaces that have a not space after
    return str.length > 0 ? str.match(/\w+/g).length : 0

}
function findLongestWord(file) {
    return fs.readFileSync(file, 'utf8')
        .match(/\w+/g)
        .sort((a, b) => b.length - a.length)[0];
}

function countLines(file) {
    let arr = fs.readFileSync(file, 'utf8').match(/\n/g)
    return arr ? arr.length+1: 1
}

/*
//Use the funcitons
console.log(`Word count of ${sampleText}:  ${countWords(sampleText)}`);
console.log(`Longest word in ${sampleText}:  ${findLongestWord(sampleText)}`);
console.log(`Lines in ${sampleText}:  ${countLines(sampleText)}`);
console.log(`Word count of ${quotes}:  ${countWords(quotes)}`);
console.log(`Longest word in ${quotes}:  ${findLongestWord(quotes)}`);
console.log(`Lines in ${quotes}:  ${countLines(quotes)}`);

 */

module.exports = {countWords,findLongestWord,countLines}