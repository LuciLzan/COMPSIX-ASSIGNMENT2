/**
 * Step 7
 * In src/numberProcessor.js, create a script that reads a file containing numbers (one per line) and processes them:
 *
 * Calculate the sum of all numbers
 * Find the highest and lowest numbers
 * Calculate the average
 * 💡 So that you can easily create unit tests, you should create different functions for each of these and return the result from the function.
 */
const fs = require('fs');

let sampleNumbers = "../data/sample-numbers.txt"

function calculateSum(file) {
    let str = fs.readFileSync(file, 'utf8')
    let sum = 0
    /*
    The matcher doesn't really need to include . or , but if we're using
    parseFloat() we might as well
     */
    str.match(/([0-9]|.|,)+/g).forEach((item) => {
        //They are all ints, would parseInt(item) not make more sense?
        //It's alright I'll just follow the guide :)
        sum += parseFloat(item);
    })
    return sum;
}
function findHighest(file) {
    let str = fs.readFileSync(file, 'utf8')
    return str
        .match(/([0-9]|.|,)+/g)
        .map((strNum)=>parseFloat(strNum))
        .sort((a, b) => b - a)
        [0];
}
function findLowest(file) {
    let str = fs.readFileSync(file, 'utf8')
    return str
        .match(/([0-9]|.|,)+/g)
        .map((strNum) => parseFloat(strNum))
        .sort((a, b) => a - b)
        [0];
}
function findAverage(file) {
    let str = fs.readFileSync(file, 'utf8')
    let total = str.match(/([0-9]|.|,)+/g).length
    /*
    As much as I'd love to just calculateSum(file) here, I
    don't think it would be worth an entire other read of the file
    to type a few less lines
    */
    let sum = 0
    str.match(/([0-9]|.|,)+/g).forEach((item) => {
        sum += parseFloat(item)
    })
    return sum/total;
}

/*
//Running the functions

console.log(`Sum of numbers in "${sampleNumbers}": ${calculateSum(sampleNumbers)}`);
console.log(`Largest number in "${sampleNumbers}": ${findHighest(sampleNumbers)}`);
console.log(`Smallest number in "${sampleNumbers}": ${findLowest(sampleNumbers)}`);
console.log(`Average of "${sampleNumbers}": ${findAverage(sampleNumbers)}`);

 */

module.exports = {calculateSum, findHighest, findLowest, findAverage};