let arrayOne = [10,11,12,2,3,4,5,6];

let element = 12;
let flag = 0;

for (let i = 0; i<arrayOne.length; i++) {
    if (element == arrayOne[i]) {
        flag = 1;
        break;
    }
}

console.log(flag == 0 ? "not found" : "found");