// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Optimise runtime complexity of recursion solution : memoization
function fib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n-2) + fib(n-1);
}

function memoize(fn){
    const cache = {};

    return function(...args) {

        if(cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}

fib = memoize(fib);

function fib(n) {
    const result = [0, 1];
    for (let i = 2; i <= n; i++) {
        result[i] = result[i-2] + result[i-1];
    }
    return result[n];
}

module.exports = fib;

// Optimise runtime complexity of recursion solution : memoization
// function fib(n) {
//     if (n < 2) {
//         return n;
//     }
//     return fib(n-2) + fib(n-1);
// }
//
// function memoize(fn){
//     const cache = {};
//     return function(...args) {
//         if(cache[args]) {
//             return cache[args];
//         }
//         const result = fn.apply(this, args);
//         cache[args] = result;
//         return result;
//     }
// }
//
// fib = memoize(fib);
//
// function fib(n) {
//     const result = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         result[i] = result[i-2] + result[i-1];
//     }
//     return result[n];
// }

// Fred's iterative
// Runtime complexity : O(n)
//  - Increase n, increase linearly complexity
// function fib(n) {
//     let n_minus_2 = 0;
//     let n_minus_1 = 1;
//     let current = 1;
//
//     for (let i = 2; i <= n; i++) {
//         current = n_minus_2 + n_minus_1;
//         n_minus_2 = n_minus_1;
//         n_minus_1 = current;
//     }
//     return current;
// }

// Fred's recursive
// !!! Runtime complexity wroooooooong !!!
//  - Increase n, dramatic increase of function calls
// Runtime complexity : O(2^n)
//
// Base case : if n < 2 return n
// else return fib(n-2) + fib(n-1)
// function fib(n) {
//     if (n < 2) {
//         return n;
//     }
//
//     return fib(n-2) + fib(n-1);
// }
