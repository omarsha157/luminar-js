let num =154;
let initialValue = num;
let res = "";

while (num != 0) {
    let lastDigit = num%10;
    // console.log(lastDigit);
    res = res + lastDigit;
    num=Math.floor(num/10);

}

// let strNum = Number(res);
// console.log(strNum);

console.log(res);

console.log(initialValue == res ? "pallidrom" : "not pallindrom");