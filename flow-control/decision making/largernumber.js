let num1=60;
let num2=50;
let num3 = 40;
let largest = 0;

if (num1 > num2 && num1 > num3) {
    largest = "num1 is largest";;
} else if(num2 > num1 && num2 > num3) {
    largest = "num2 is largest";
} else if (num3 > num1 && num3 > num1) {
    largest = "num3 is largest";
} else {
    largest = "all numbers are equal";
}

console.log(largest);