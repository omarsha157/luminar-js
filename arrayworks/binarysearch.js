let arrayOne = [5,85,6,7,4,941,6,4,8,5,2,4,77,6,2];

arrayOne.sort((n1,n2) => n1-n2);


let num = 3;
let flag = 0;

let low = 0;
let high = arrayOne.length - 1;

while (low <= high) {
    let mid = Math.floor((low + high) /2);

    if (arrayOne[mid] == num) {
        flag = 1;
        break;
    } else if (num < arrayOne[mid]) {
        high = mid - 1;
    } else if ( num > arrayOne[mid]) {
        low = mid + 1;
    }
}

console.log(flag == 1 ? `${num} is in array` : "number not found");

