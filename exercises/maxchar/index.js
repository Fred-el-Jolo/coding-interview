// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    for (let char of str){
        charMap[char] = charMap[char] + 1 || 1;
    }

    let max = 0;
    let maxCharacter = '';
    for (let property in charMap){
        if (charMap[property] > max) {
            max = charMap[property];
            maxCharacter = property
        }
    }

    return maxCharacter;
}

maxChar('aabc');

module.exports = maxChar;

// Fred's !!!
// function maxChar(str) {
//     const result = {};
//     for (let character of str){
//         if (!result[character])
//             result[character] = 0;
//         result[character]++;
//     }
//     let max = 0;
//     let maxCharacter = '';
//     for (let property in result){
//         if (result[property] > max) {
//             max = result[property];
//             maxCharacter = property
//         }
//     }

//     return maxCharacter;
// }