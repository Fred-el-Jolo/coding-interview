// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// Recursion tips
// - Identify bare minimum information need to represent your problem
// - Give reasonable defaults to the bare minimum pieces of info
// - Check the base case. Is there any work left to do ? If not, return
// - Do some work. Call your function again, making sure the arguments have
// changed in some fashion
//
// Applied here :
// - Base case : If (row === n) then we have hit the end of our problem
// - If the 'stair' string has a length === n then we are at the end of row
// - If the length of the stair string is less than or equal to the row number
// we're working on, we add a '#', otherwise add a space
function steps(n, row = 0, stair = '') {

    if (n === row) {
        return;
    }

    if (stair.length === n) {
        console.log(stair);
        return steps(n, row + 1);
    }

    if (stair.length <= row) {
        stair += '#';
    }
    else {
        stair += ' ';
    }
    steps(n, row, stair);
}



module.exports = steps;

// Recursion tips
// - Identify bare minimum information need to represent your problem
// - Give reasonable defaults to the bare minimum pieces of info
// - Check the base case. Is there any work left to do ? If not, return
// - Do some work. Call your function again, making sure the arguments have
// changed in some fashion
//
// Applied here :
// - Base case : If (row === n) then we have hit the end of our problem
// - If the 'stair' string has a length === n then we are at the end of row
// - If the length of the stair string is less than or equal to the row number
// we're working on, we add a '#', otherwise add a space
// function steps(n, row = 0, stair = '') {
//
//     if (n === row) {
//         return;
//     }
//
//     if (stair.length === n) {
//         console.log(stair);
//         return steps(n, row + 1);
//     }
//
//     if (stair.length <= row) {
//         stair += '#';
//     }
//     else {
//         stair += ' ';
//     }
//     steps(n, row, stair);
// }

// From 0 to n :
// - create an empty string
// - From 0 to n
//   - If current column is <= to current row
//     - Add '#' to string
//   - Else
//     - Add ' ' to string
// - Console log string
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = '';
//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 stair += '#';
//             }
//             else {
//                 stair += ' ';
//             }
//         }
//         console.log(stair);
//     }
// }

// Fred's
// For loop to handle each console.log statement
// For each line, repeat the '#' character [row_index] times (row_index starting from 1)
// Then repeat the ' ' character [n-row_index] times (row_index starting from 1)
// function steps(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(`${repeatChar('#', i)}${repeatChar(' ', n-i)}`);
//     }
// }
//
// function repeatChar(char, times) {
//     let result = '';
//     for (let i = 0; i < times; i++) {
//         result += char;
//     }
//     return result;
// }
