let aryOne = [1,2,3,724,5,6,7,8,9,10,55,11,12,13];

let largeNum = aryOne[0];

for(let i = 1;i<aryOne.length;i++) {
    if (largeNum < aryOne[i]) {
        largeNum = aryOne[i];
    }
}

console.log(largeNum);