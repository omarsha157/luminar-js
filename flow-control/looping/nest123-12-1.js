let num =  3;

for(let row = 1;row<=num;row++) {
    let str="";
    for(let col = 1;col <=num+1-row; col++) {
        str += col;
    };
    console.log(str);
};