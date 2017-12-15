// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

// Iterate through list nodes
// Two vars : slow & fast
// Every iteration, check if two next nodes of fast exists
// If so, continue iterations
// If not, slow must be at midpoint, return it
function midpoint(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

module.exports = midpoint;

// Iterate through list nodes
// Two vars : slow & fast
// Every iteration, check if two next nodes of fast exists
// If so, continue iterations
// If not, slow must be at midpoint, return it
// function midpoint(list) {
//     let slow = list.getFirst();
//     let fast = list.getFirst();
//
//     while(fast.next && fast.next.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//
//     return slow;
// }
