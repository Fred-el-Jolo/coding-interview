// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

// Two vars equals to first node
// Set fast pointer n steps in advance
// iterate through the list, one node by one for each pointers.
// When fast is pointing on the end
function fromLast(list, n) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    let i = 0;
    while (i < n && fast.next) {
        fast = fast.next;
        i++;
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}

module.exports = fromLast;
