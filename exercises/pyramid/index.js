// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// From 0 to n
// Create empty string
// Compute total string length
// For 0 to string length
// For each row :
// - Compute number of dashes : row * 2 + 1 (always odd)
// - Compute number of spaces : n - dashesNumber (always even)
// - if column <= spacesNumber / 2
//   - add a space
// - else if column > spacesNumber / 2 && column <= dashesNumber + spacesNumber / 2
//   - add a dash
// - else if column < stringLength
//   - add a space
function pyramid(n) {
    const midpoint = Math.floor((n * 2 - 1) / 2);
    for (let row = 0; row < n; row++) {
        let level = '';
        for (let column = 0; column < n * 2 - 1; column++) {
            if (midpoint - row <= column && midpoint + row >= column){
                level += '#';
            }
            else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

module.exports = pyramid;

// Fred's
// From 0 to n
// Create empty string
// Compute total string length
// For each row :
// - Compute number of dashes : row * 2 + 1 (always odd)
// - Compute number of spaces : n - dashesNumber (always even)
// - Concatenate spacesNumber/2, dashesNumber, spacesNumber/2
// function pyramid(n) {
//     const fullLength = n * 2 - 1;
//     for (let row = 0; row < n; row++) {
//         let pyramidStr = '';
//         let dashesNumber = row * 2 + 1;
//         let spacesNumber = fullLength - dashesNumber;
//         console.log(repeatChar(' ', spacesNumber/2) + repeatChar('#', dashesNumber) + repeatChar(' ', spacesNumber/2));
//     }
// }
//
// function repeatChar(char, times) {
//     let result = '';
//     for (let i=0; i < times; i++) {
//         result += char;
//     }
//     return result;
// }
