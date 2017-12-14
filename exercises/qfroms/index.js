// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stackOne = new Stack();
        this.stackTwo = new Stack();
    }

    add (item) {
        this.stackOne.push(item);
    }

    remove () {
        while (this.stackOne.peek()) {
            this.stackTwo.push(this.stackOne.pop())
        }

        const item = this.stackTwo.pop();

        while (this.stackTwo.peek()) {
            this.stackOne.push(this.stackTwo.pop());
        }

        return item;
    }

    peek () {
        while (this.stackOne.peek()) {
            this.stackTwo.push(this.stackOne.pop());
        }

        const item = this.stackTwo.peek();

        while (this.stackTwo.peek()) {
            this.stackOne.push(this.stackTwo.pop());
        }

        return item;
    }
}

module.exports = Queue;

// Fred's
// TO EXPLAIN
// class Queue {
//     constructor() {
//         this.stackOne = new Stack();
//         this.stackTwo = new Stack();
//     }

//     add (item) {
//         while (this.stackOne.peek()) {
//             this.stackTwo.push(this.stackOne.pop());
//         }

//         this.stackOne.push(item);

//         while (this.stackTwo.peek()) {
//             this.stackOne.push(this.stackTwo.pop());
//         }
//     }

//     remove () {
//         while (this.stackOne.peek()) {
//             this.stackTwo.push(this.stackOne.pop());
//             if(!this.stackOne.peek()) {
//                 break;
//             }
//         }

//         while (this.stackTwo.peek()) {
//             this.stackOne.push(this.stackTwo.pop());
//         }

//         return this.stackOne.pop();
//     }

//     peek () {
//         while (this.stackOne.peek()) {
//             this.stackTwo.push(this.stackOne.pop());
//         }

//         while (this.stackTwo.peek()) {
//             this.stackOne.push(this.stackTwo.pop());
//         }

//         return this.stackOne.peek();
//     }
// }
