// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


function reverseInt(n) {
    const reversed = n
        .toString()
        .split(``)
        .reverse()
        .join(``);

    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

// function reverseInt(n) {
//     const reversed = n
//         .toString()
//         .split(``)
//         .reverse()
//         .join(``);

//     return parseInt(reversed) * Math.sign(n);
// }

// Fred's !!!
// function reverseInt(n) {
//     debugger;

//     const str = n.toString();
//     let escaped = str.match(/\d/g);
//     const reversedStr = escaped
//         .reverse()
//         .join(``);
//     const reversedInt = Number(reversedStr);

//     return n < 0 ? -reversedInt : reversedInt;
// }