let arrayOne = [2,3,4,5,6,7];
let inp = 5;

let low = 0;
let high = arrayOne.length - 1;

while (low < high) {
    let currSum = arrayOne[low] + arrayOne[high];

    if (currSum > inp) {
        low += 1;
    } else if (currSum < inp) {
        high -= 1;
    } else if (currSum == inp) {
        console.log(`pairs are ${arrayOne[low]},${arrayOne[high]}`);
        break;
    }
}