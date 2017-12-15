// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// create array that contains nodes and and associated value (stopper variables)
// Create counters array initialized with a value of 0
// Iterate on the array, consider first node
// Add children after stopper
// Increment counter
// next element on array => stopper
// reinsert stopper end of array and push another element to level
// Last step, if only 1 element remaining : stop (if not, infinite loop)
function levelWidth(root) {
    const counters = [0];
    const array = [root, 'stopper'];

    while (array.length > 1) {
        const node = array.shift();

        if (node === 'stopper') {
            array.push('stopper');
            counters.push(0);
        }
        else {
            array.push(...node.children);
            counters[counters.length-1]++;
        }
    }

    return counters;
}

module.exports = levelWidth;
