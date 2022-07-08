let num = 370;
let inp =num;
let sum = 0;

while(num != 0) {
    let lastDigit = num%10;
    let cube = lastDigit**3;
    sum = sum + cube;
    num = Math.floor(num/10);
}

console.log(sum);

inp == sum ? console.log("armstrong") : console.log("not armstrong");

//* if a number has its cube and sum of each digit gives the original number it is called armstrong number