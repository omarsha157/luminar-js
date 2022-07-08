let arrayOne = [2,3,4,5];
let inp = 8;



for (let i = 0; i < arrayOne.length; i++) {
    for (let j =i + 1; j < arrayOne.length; j++) {
        if (arrayOne[i] + arrayOne[j] == inp){
            console.log(arrayOne[i] , arrayOne[j]);
        }
    }
}

