// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Create a vowels counter
// Iterate through the chars
// increment vowels each time a vowel is encountered
// return vowels
function vowels(str) {
    let count = 0;

    const checker = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++;
        }
    }

    return count;
}

module.exports = vowels;

// Fred's
// Build a RegExp matching a, e, i, o, u characters
// match the string with the regexp
// return the array length
// function vowels(str) {
//     const matches = str.match(/[aeiou]/gi);
//     return matches ? matches.length : 0;
// }

// Fred's
// Create a vowels counter
// Iterate through the chars
// increment vowels each time a vowel is encountered
// return vowels
// function vowels(str) {
//     let count = 0;

//     for (let char of str) {
//         if ('aeiouAEIOU'.indexOf(char) >= 0) {   // We could use .includes ES6 method
//             count++;
//         }
//     }

//     return count;
// }