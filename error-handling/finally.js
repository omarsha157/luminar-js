let expr = "%11+3";

try {
    console.log(eval(expr));
} catch(e) {
    expr = "%12+3";
    try {
        console.log(eval(expr));
    } catch(e) {
        expr = 13+3;
    }
} finally {
    console.log("statement1");
    console.log("statement2");
}