let num1=10;
let num2=20;

console.log(`values before swapping num1=${num1} and num2=${num2}`)

let num3 = num1;
//* new num1 = 20 
num1 = num2;
//* new num2 = 10
num2 = num3;

console.log(`values after swapping num1=${num1} and num2=${num2}`)