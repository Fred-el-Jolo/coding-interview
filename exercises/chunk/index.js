// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];

    let index = 0;
    while(index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
}

module.exports = chunk;

// function chunk(array, size) {
//     const chunked = [];
//     for (let element of array) {
//         const last = chunked[chunked.length - 1];
//         if (!last || last.length === size) {
//             chunked.push([element]);
//         }
//         else {
//             last.push(element);
//         }
//     }
//     return chunked;
// }

// Fred's !!!
// function chunk(array, size) {
//     let chunks = [];
//     for (let i = 0; i < array.length; i = i + size) {
//         chunks.push(array.slice(i, i + size));
//     }

//     console.log(chunks);

//     return chunks;
// }

// Fred's #2
// function chunk(array, size) {
//     let chunks = [];
//     for (let i = 0; i < array.length; i = i + size) {
//         let chunk = [];
//         for (let j = i; j < Math.min(i+size, array.length); j++) {
//             chunk.push(array[j]);
//         }
//         chunks.push(chunk);
//     }

//     console.log(chunks);

//     return chunks;
// }