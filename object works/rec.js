let pattern = "AABCABBCCC";

let wc = {};
let recArr = [];
// [... pattern]
// Array.from(pattern).map(char => char in wc ?  : wc[char]=1)

//? find first recursive character

// let letters = {};

// for (let char of pattern) {
//     if (char in letters) {
//         console.log(`${char} is first reccursive character`);
//         break;
//     } else {
//         letters[char] = 1;
//     }
// }

// console.log(letters);

//? find second reccursive character

// let letters = {};
// let recChar = new Set();


// for (let char of pattern) {
//     if (char in letters) {
//         recChar.add(char);
//     } else {
//         letters[char] = 1;
//     }
// }

// console.log(Array.from(recChar)[1]);
//spread operator
// console.log([...recChar][1]);

// console.log(recChar);
// ? most reccursive character

let letters = {};

for (let char of pattern) {
    if (char in letters) {
        letters[char]+= 1;
    } else {
        letters[char] = 1;
    }
}

// console.log(letters);

console.log(Object.entries(letters).sort((a1,a2)=>a2[1]-a1[1])[0]);
