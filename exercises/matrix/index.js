// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
//  matrix(5)
//     [[1,   2,  3,  4,  5],
//     [16,  17, 18, 19,  6],
//     [15,  24, 25, 20,  7],
//     [14,  23, 22, 21,  8]
//     [13,  12, 11, 10,  9]]





module.exports = matrix;

//
//function matrix(n) {
//     const results = [];
//     for (let i = 0; i < n; i++) {
//         results.push([]);
//     }

//     let counter = 1;
//     let startColumn = 0;
//     let endColumn = n - 1;
//     let startRow = 0;
//     let endRow = n - 1;

//     while (startColumn <= endColumn && startRow <= endRow) {
//         // left to right
//         for (let i = startColumn; i <= endColumn; i++) {
//             results[startRow][i] = counter++;
//         }

//         startRow++;

//         // top to bottom
//         for (let j = startRow; j <= endRow; j++) {
//             results[j][endColumn] = counter++;
//         }

//         endColumn--;

//         // right to left
//         for (let i = endColumn; i >= startColumn; i--) {
//             results[endRow][i] = counter++;
//         }

//         endRow--;

//         // bottom to top
//         for (let j = endRow; j >= startRow; j--) {
//             results[j][startColumn] = counter++;
//         }

//         startColumn++;


//     }


//     console.log(results);

//     return results;
// }

// Fred's  !!! BAD !!!
// function matrix(n) {
//     const results = [];
//     for (let i = 0; i < n; i++) {
//         array.push([]);
//     }

//     let rowIndex = 0;
//     let columnIndex = 0;
//     let count = 1;

//     // left to right
//     for (; columnIndex < n; columnIndex++) {
//         array[rowIndex][columnIndex] = count++;
//     }

//     columnIndex--;
//     rowIndex++;

//     // top to bottom
//     for (; rowIndex < n; rowIndex++) {
//         array[rowIndex][columnIndex] = count++;
//     }

//     columnIndex--;
//     rowIndex--;

//     // right to left
//     for (; columnIndex >= 0; columnIndex--) {
//         array[rowIndex][columnIndex] = count++;
//     }

//     // bottom to top
//     for (; rowIndex >= 0; rowIndex--) {
//         array[rowIndex][columnIndex] = count++;
//     }




//     console.log(array);

//     return array;
// }