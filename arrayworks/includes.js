// let nums = [10,2,3,4,5,6];

// console.log(nums.includes(50));

// includes check parameter exist in array and returns true or false

let numbers = [[10,11],[12,13],[1,2,3,4],[50,5,6],[34,5,67]];

let numflat = numbers.flat();

let num15 = numflat.filter(n => n>15);

console.log(num15);