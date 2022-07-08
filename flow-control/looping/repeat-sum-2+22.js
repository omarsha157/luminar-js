let i = 1;
let num = 3;
let str = "";
let sum = 0;

while (i <= num) {
    str += num;
    // console.log(str);
    sum += Number(str);
    i++;
}
console.log(sum);