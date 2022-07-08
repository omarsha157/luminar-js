let num = 15;

// if (num%15 === 0) {
//     console.log("fizz buzz");
// } else if (num%5 === 0) {
//     console.log("buzz");
// } else if (num%3 === 0) {
//     console.log("fizz");
// }

let str = "";

if(num%3 === 0) {
    str+="fizz";
};
if (num%5 === 0) {
    str+= "buzz";
};

console.log(str);