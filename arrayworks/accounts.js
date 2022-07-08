let accounts=[
    [1000,"ram",25000,"savings",[
        [1002,"g-pay",400],
        [1003,"phone-pay",500],
        [1004,"amazon-pay",600],

    ]],
    [1001,"jhon",35000,"current",[
        [1000,"g-pay",500],
        [1003,"phone-pay",500],
        [1004,"amazon-pay",600],

    ]],
    [1002,"hari",55000,"savings",[
        [1000,"g-pay",1000],
        [1003,"phone-pay",500],
        [1004,"amazon-pay",600],

    ]],
    [1003,"anu",15000,"current",[
        [1002,"g-pay",400],
        [1001,"phone-pay",500],
        [1004,"amazon-pay",600],

    ]]
]

//? print total number of savings account

// let savingAcc = accounts.filter( e => e[3] == "savings").length;

// console.log(savingAcc);

//? print all g-pay transactions

// let gpayTran = accounts.map(e => e[4][0][1] == "g-pay" ? e[4][0][2] : null);

// let gpayTran = accounts.map(e => e[4]).flat().filter(e => e[1] == "g-pay");

// console.log(gpayTran);s

//? pritn all transactions where transaction amount > 400

let tran400 = accounts.map(e => e[4]).flat().filter(e => e[2] > 400);

// console.log(tran400);


//? sort accounts based on balance

let sortBal = accounts.sort((a1,a2) => a2[2]-a1[2]);

// console.log(sortBal);

// ?print debit transactions of account number 1002

// let tran1002 = accounts.filter(e => e[0] == 1002);

// let tran1002 = accounts.find(e => e[0] == 1002);

// console.log(tran1002);

//? print all debit transactions of account number 1002 where transaction amount > 400

// let tran1002 = accounts.filter(e => e[0] == 1002);
// let tran1002 = accounts.filter(e => e[0] == "1002").map(e => e[4]).filter(e => e[0][2] > 400 ? e[0][2] : null);



// console.log(tran1002);
