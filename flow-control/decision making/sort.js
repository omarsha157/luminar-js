let num1 = 465;
let num2 = 852;
let num3 = 715;

let largest;
let secondlargest;
let smallest;

// if (num1 < num2 && num1 < num3 && num2 < num3) {
//     console.log(num1, num2, num3);
// } else if (num1 < num2 && num1 < num3 && num3 < num2) {
//     console.log(num1, num3, num2);
// } else if (num2 < num1 && num2 < num3 && num1 < num3) {
//     console.log(num2, num1, num3);
// } else if (num2 < num1 && num2 < num3 && num3 < num1) {
//     console.log(num2, num3, num1);
// } else if (num3 < num1 && num3 < num2 && num1 < num2) {
//     console.log(num3, num1, num2);
// } else if (num3 < num1 && num3 < num2 && num2 < num1) {
//     console.log(num3, num2, num1);
// };

if (num1 > num2 && num1 > num3) {
    largest = num1;
    if (num2 > num3) {
        secondlargest = num2;
        smallest = num3;
    } else {
        secondlargest = num3;
        smallest = num2;
    }
} else if(num2 > num1 && num2 > num3) {
    largest = num2;
    if (num1 > num3) {
        secondlargest = num1;
        smallest = num3;
    } else {
        secondlargest = num3;
        smallest = num1;
    }
} else if (num3 > num1 && num3 > num1) {
    largest = num3;
    if (num1 > num2) {
        secondlargest = num1;
        smallest = num2;
    } else {
        secondlargest = num2;
        smallest = num1;
    }
} else {
    largest = "all numbers are equal";
}

console.log(smallest, secondlargest, largest);