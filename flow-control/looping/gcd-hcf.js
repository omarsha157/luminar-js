let num1 = 12;
let num2 = 24;
let i = 1;
let result = 0;

// this is inefficient for finding lowest number
// if (num1 > num2) {
//     let num = num2;
//     num2 = num1;
//     num1 = num;
// }

let low = num1<num2 ? num1 : mum2;

while (i <= low) {
    if (num1 % i === 0 && num2 % i === 0) {
        result = i;
    };
    i++;
};
console.log(result);

