function one() {
    console.log("one");
}

function two() {
    one();
    console.log("two");
}

function three() {
    two();
    console.log("three");
}

three();