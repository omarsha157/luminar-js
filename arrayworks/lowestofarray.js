let aryOne = [2,3,4,5,1,6,7,0,9,10,11,12,13];

let smallNum = aryOne[0];

for(let i = 0;i<aryOne.length;i++) {
    if (smallNum > aryOne[i]) {
        smallNum = aryOne[i];
    }
}

console.log(smallNum);