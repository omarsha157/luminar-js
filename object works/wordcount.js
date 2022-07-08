let text = "hello hai hello hai";

let words = text.split(" ");
let wc = {};
for(let word of words) {
    if(word in wc) {
        wc[word] = wc[word] + 1;
    } else {
        wc[word] = 1;
    }
}

// console.log(wc);

// word count in string

// split  uses its given parameter to check where split is and then adds it to array

// let words = text.split(" ");

// let wc = {};

// for (let word of words) {
//     if (word in wc) {
//         wc[word] += 1;
//     } else {
//         wc[word] = 1;
//     }
// }



// let wc = {};
// let words = text.split(" ").map(word => word in wc ? wc[word]+=1 : wc[word]=1);

// console.log(wc);
