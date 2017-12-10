// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}
function cleanString(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split(``)
        .sort()
        .join(``);
}

anagrams('A tree, a life, a bench', 'A tree, a fence, a yard');

module.exports = anagrams;

// !!! helper function, Regexp, comparison with Object.keys, return when true or false !!!
// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     debugger;
//     if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false;
//     }

//     for (let key in aCharMap) {
//         if (aCharMap[key] !== bCharMap[key]) {
//             return false;
//         }
//     }

//     return true;
// }
// function buildCharMap(str){
//     const charMap = {};

//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
// }

// Fred's
// // Algorithm :
// // - Remove special chars from the strings
// // - Lower case the strings
// // - Create chars map for both strings
// // - compare each chars map
// function anagrams(stringA, stringB) {
//     // Remove special chars from the strings & lower case the strings
//     const charsRegExp = /\w/g;
//     const escapedA = stringA
//         .toLowerCase()
//         .match(charsRegExp);
//     const escapedB = stringB
//         .toLowerCase()
//         .match(charsRegExp);

//     // Create chars map for both strings
//     const charMapA = {};
//     const charMapB = {};

//     for (let char of escapedA) {
//         charMapA[char] = charMapA[char] + 1 || 1;
//     }

//     for (let char of escapedB) {
//         charMapB[char] = charMapB[char] + 1 || 1;
//     }

//     // Compare each chars number from the 2 strings
//     // - if the occurences from every property from A are equal to the occurences
//     // from the same property on B, then A and B are considere equals
//     let areEqual = true;
//     for (let key in charMapA) {
//         if (charMapA[key] !== charMapB[key]) {
//             areEqual = false;
//             break;
//         }
//     }

//     for (let key in charMapB) {
//         if (charMapB[key] !== charMapA[key]) {
//             areEqual = false;
//             break;
//         }
//     }

//     return areEqual;

// }