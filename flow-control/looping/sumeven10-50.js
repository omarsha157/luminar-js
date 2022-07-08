let i = 10;
let even = 0;

while (i <= 50) {
    if(i%2 === 0) {
        even = even + i;
    }
    i++;
}

console.log(even);