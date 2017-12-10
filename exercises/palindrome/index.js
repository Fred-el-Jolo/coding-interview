// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    debugger;
    return  str.split(``).every((value, index) => {
        return value == str[str.length - index -1];
    });
}

palindrome(`a,bba`);

module.exports = palindrome;

// function palindrome(str) {
//     const reversed = str
//         .split(``)
//         .reverse()
//         .join(``);

//     return reversed == str;
// }

// function palindrome(str) {
//     debugger;
//     const regexp = /\w/g;
//     const escaped = str.match(regexp);
//     const reversed = escaped.reverse().join(``);

//     return reversed == escaped.join(``);
// }

// function palindrome(str) {
//     debugger;
//     return  str.split(``).every((value, index) => {
//         return value == str[str.length - index -1];
//     });
// }