let phno = "0123456789";

try {
    if(phno.length != 10 || !isNaN(phno)) {
        throw new Error("phone number is not valid")
    }
    console.log(phno);
} catch(e) {
    console.log(e);
}

console.log("statement1");
console.log("statement2");

