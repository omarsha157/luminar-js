let mail = "abc@gmail.com";
// let mail = "abc@hotmail.com";

try {
    if(!(mail.endsWith("@gmail.com"))) {
        throw new Error("email not valid")
    }
} catch(e) {
    console.log(e);
}

console.log("statement1");
console.log("statement1");