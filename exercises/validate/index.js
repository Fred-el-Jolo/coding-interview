// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

// Validate left tree
// set max to node.value
// call validate on left value
// Validate right tree
// set min to node.value
// call validate on right value
function validate(node, min = null, max = null) {
    if( (min && node.data < min) || (max && node.data > max) ) {
        return false;
    }

    const leftIsValid = node.left ? validate(node.left, min, node.data) : true;
    const rightIsValid = node.right ? validate(node.right, node.data, max) : true;

    return leftIsValid && rightIsValid;
}

module.exports = validate;

// Fred's
// Validate left tree
// set max to node.value
// call validate on left value
// Validate right tree
// set min to node.value
// call validate on right value
// function validate(node, min = null, max = null) {
//     if( (min && node.data < min) || (max && node.data > max) ) {
//         return false;
//     }

//     const leftIsValid = node.left ? validate(node.left, min, node.data) : true;
//     const rightIsValid = node.right ? validate(node.right, node.data, max) : true;

//     return leftIsValid && rightIsValid;
// }
