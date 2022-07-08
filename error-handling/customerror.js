let age = 13;

try {
    if (age < 18) {
        throw new Error("age not valid")
    }
} catch (e) {
    console.log(e);
}

console.log("file tansaction");

console.log("database commit");