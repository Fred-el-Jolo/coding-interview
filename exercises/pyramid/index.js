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

// Recursion tips
// - Identify bare minimum information need to represent your problem
// - Give reasonable defaults to the bare minimum pieces of info
// - Check the base case. Is there any work left to do ? If not, return
// - Do some work. Call your function again, making sure the arguments have
// changed in some fashion
//
// Applied here :
// - Base case : if (row === n), we have reached the end
// - if level.length equals to n * 2 - 1, console log and handle next row
// - if level.length >= midpoint - row and level.length <= midpoint + row add
// a '#', otherwise add a space
function pyramid(n, row = 0, level = '') {

    if (row === n) {
        return;
    }

    if (level.length === (n * 2 - 1) ) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const midpoint = Math.floor( (n * 2 - 1) / 2);
    let add;
    if(midpoint - row <= level.length && level.length <= midpoint + row) {
        add = '#';
    }
    else {
        add = ' ';
    }

    pyramid(n, row, level + add);
}

module.exports = pyramid;

// Recursion tips
// - Identify bare minimum information need to represent your problem
// - Give reasonable defaults to the bare minimum pieces of info
// - Check the base case. Is there any work left to do ? If not, return
// - Do some work. Call your function again, making sure the arguments have
// changed in some fashion
//
// Applied here :
// - Base case : if (row === n), we have reached the end
// - if level.length equals to n * 2 - 1, console log and handle next row
// - if level.length >= midpoint - row and level.length <= midpoint + row add
// a '#', otherwise add a space
// function pyramid(n, row = 0, level = '') {
//
//     const midpoint = Math.floor( (n * 2 - 1) / 2);
//
//     if (row === n) {
//         return;
//     }
//
//     if (level.length === (n * 2 - 1) ) {
//         console.log(level);
//         return pyramid(n, row + 1);
//     }
//
//     if(midpoint - row <= level.length && level.length <= midpoint + row) {
//         level += '#';
//     }
//     else {
//         level += ' ';
//     }
//
//     pyramid(n, row, level);
// }


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
// function pyramid(n) {
//     const midpoint = Math.floor((n * 2 - 1) / 2);
//     for (let row = 0; row < n; row++) {
//         let level = '';
//         for (let column = 0; column < n * 2 - 1; column++) {
//             if (midpoint - row <= column && midpoint + row >= column){
//                 level += '#';
//             }
//             else {
//                 level += ' ';
//             }
//         }
//         console.log(level);
//     }
// }

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

// Fred's recursive
// - Base case : if (row === n), we have reached the end
// - handle row
// function pyramid(n, row = 0) {
//     const fullLength = n * 2 - 1;

//     if (row === n) {
//         return;
//     }

//     const dashesNumber = row * 2 + 1;
//     const spacesNumber = fullLength - dashesNumber;

//     console.log(repeatChar(' ', spacesNumber/2) + repeatChar('#', dashesNumber) + repeatChar(' ', spacesNumber/2));

//     return pyramid(n, row + 1);
// }

// function repeatChar(char, times) {
//     let result = '';
//     for (let i=0; i < times; i++) {
//         result += char;
//     }
//     return result;
// }