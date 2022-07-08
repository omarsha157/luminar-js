for (let row=1;row<=6;row++) {
    let str="";
    for(let space=1;space<=(6-row);space++) {
        str+=" ";
    }
    for(let col=1;col<=row;col++) {
        str+="* ";
    }
    console.log(str);
}