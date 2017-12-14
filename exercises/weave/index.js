// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');


function weave(sourceOne, sourceTwo) {
    const merged = new Queue();

    while(sourceOne.peek() || sourceTwo.peek()) {
        if(sourceOne.peek()) {
            merged.add(sourceOne.remove());
        }

        if(sourceTwo.peek()) {
            merged.add(sourceTwo.remove());
        }
    }

    return merged;
}

module.exports = weave;

// function weave(sourceOne, sourceTwo) {
//     const merged = new Queue();

//     while(sourceOne.peek() || sourceTwo.peek()) {
//         if(sourceOne.peek()) {
//             merged.add(sourceOne.remove());
//         }

//         if(sourceTwo.peek()) {
//             merged.add(sourceTwo.remove());
//         }
//     }

//     return merged;
// }

// Fred's
// Create empty merged queue
// Loop while sourceOne or sourceTwo returns existing peek elements
// Remove next element from both sources
// If an element exists, insert it into merged queue
// function weave(sourceOne, sourceTwo) {
//     const merged = new Queue();

//     while(sourceOne.peek() || sourceTwo.peek()) {
//         const item1 = sourceOne.remove();
//         if(item1) {
//             merged.add(item1);
//         }

//         const item2 = sourceTwo.remove();
//         if(item2) {
//             merged.add(item2);
//         }
//     }

//     console.log(merged.data);
//     return merged;
// }
