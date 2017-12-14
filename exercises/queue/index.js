// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

function Queue() {
    this.data = [];
}

Queue.prototype.add = function(item) {
        this.data.unshift(item);
};

Queue.prototype.remove = function() {
        return this.data.pop();
};

module.exports = Queue;

// Fred's
// class Queue {
//     constructor() {
//         this.queue = [];
//     }

//     add(item) {
//         this.queue.unshift(item);
//     }

//     remove() {
//         return this.queue.pop();
//     }
// }

// Fred's classical inheritance
