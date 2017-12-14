// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, node = null) {
        this.data = data;
        this.next = node;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Create new node
    // If head alreay exist, reference it on new node
    // assign new node to head
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    // If this.head is null, return 0
    // Iterate through the node list and increment a counter
    // Return the counter
    size() {
        if (this.head === null) {
            return 0
        }

        let node = this.head;
        let counter = 1;

        while(node && node.next) {
            node = node.next;
            counter++;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    // Iterate through the node list and return last element
    getLast() {
        let node = this.head;

        while(node && node.next) {
            node = node.next;
        }

        return node;
    }

    clear() {
        this.head = null;
    }

    // If head === null, do nothing
    // Get head.next element and set it as head
    removeFirst() {
        if(this.head){
            this.head = this.head.next;
        }
    }

    // If head === null, do nothing
    // Get element before the last one and set its next value to NULL
    removeLast() {
        if (this.head) {
            if (this.head.next) {
                let node = this.head;

                while(node && node.next && node.next.next) {
                    node = node.next;
                }
                console.log(node);
                node.next = null;
            }
            else {
                this.head = null;
            }
        }
    }

    insertLast(data) {

    }

    getAt(integer) {

    }

    removeAt(integer) {

    }

    insertAt(data, integer) {

    }

    forEach(fn) {

    }

    // [Symbol.iterator] {

    // }
}

module.exports = { Node, LinkedList };
