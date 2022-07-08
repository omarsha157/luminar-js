let num =  3;

for(let row = 1;row<=num;row++) {
    let str="";
    for(let col = num;col >=row; col--) {
        str += col;
    };
    console.log(str);
};