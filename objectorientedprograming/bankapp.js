let accounts = [
    {
        acno: 1000,
        type: "saving",
        balance: 5000,
        password: "abc123",
        transactions: {
            creditTransactions: [
                { from: 1002, amount: 1000 },
                { from: 1003, amount: 2000 },
            ],
            debitTransactions: [
                { to: 1002, amount: 1000 },
                { to: 1003, amount: 2000 },
            ],
        },
    },
    {
        acno: 1001,
        type: "current",
        balance: 6000,
        password: "Password@123",
        transactions: {
            creditTransactions: [
                { from: 1002, amount: 1000 },
                { from: 1003, amount: 2000 },
            ],
            debitTransactions: [
                { to: 1002, amount: 1000 },
                { to: 1003, amount: 2000 },
            ],
        },
    },
    {
        acno: 1002,
        type: "saving",
        balance: 15000,
        password: "user123",
        transactions: {
            creditTransactions: [
                { from: 1001, amount: 1000 },
                { from: 1003, amount: 2000 },
            ],
            debitTransactions: [
                { to: 1000, amount: 1000 },
                { to: 1003, amount: 2000 },
            ],
        },
    },
];

// ?login
// ?bal enq
// ?fund transfer
// ? payment history

let session ={};

function validateAccountNumber (acnoInp) {
    return accounts.some(ac => ac.acno == acnoInp);
};

function getDataByAcno (acnoInp) {
    return accounts.find(data => data.acno == acnoInp);
};

function getBalance (acnoInp) {
    return accounts.find(data => data.acno == acnoInp).balance;
};

function getLastTransaction (acnoInp) {
    let allDebitTransactions = accounts.find(data => data.acno == acnoInp).transactions.debitTransactions;
    console.log(allDebitTransactions[allDebitTransactions.length - 1]);
};

function authenticate(accnoInp, passwordInp) {
    if (validateAccountNumber(accnoInp)) {
        let data = getDataByAcno(accnoInp);
        if (data.password == passwordInp) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

function login(accnoInp, passwordInp) {
    if (authenticate(accnoInp, passwordInp)) {
        session["user"] = accnoInp;
    } else {
        console.log("invalid login credentials");
    }
};

function loginRequired() {
    return "user" in session ? true : false;
};



function balanceEnquiery () {
    if (loginRequired()) {
        let loggedUser = session.user;
        console.log(getBalance(loggedUser));
    } else {
        console.log("you must login first");
    }
};


function fundtransfer(toaccno, amount) {
    if (loginRequired()) {
        let loggedUser = session.user;
        if (validateAccountNumber(toaccno)) {
            if (getBalance(loggedUser) >= amount) {

                getDataByAcno(loggedUser).balance -= amount; 
                getDataByAcno(toaccno).balance += amount; 

                let debitData = { to: toaccno, amount:amount};
                getDataByAcno(loggedUser).transactions.debitTransactions.push(debitData);

                let creditData = { from: loggedUser, amount:amount};
                getDataByAcno(toaccno).transactions.creditTransactions.push(creditData);

            } else {
                console.log("insufficient balance in your account");
            };
        } else {
            console.log("invalid recipient ac no");
        };
    } else {
        console.log("you must login first");
    };
};



// console.log(getDataByAcno(1000));
// console.log(getDataByAcno(1000).transactions);
// console.log(getDataByAcno(1001));
// console.log(getDataByAcno(1001).transactions);


//? fund transfer(toaccno, amount)
// ? login authenticate,check toaccno exits ,check sufficient balance, sub from sender and add to reciver, print all in transaction;

// ? payment history login

function paymentHistory () {
    if (loginRequired()) {
        let loggedUser = session.user;
        let userData  = getDataByAcno(loggedUser);

        console.log(userData.transactions.debitTransactions);
        console.log(userData.transactions.creditTransactions);
    } else {
        console.log("you must login");
    }
};

login(1000, "abc123");

fundtransfer (1001, 2000);

// paymentHistory();

//? logout

function logOut() {
    if (loginRequired()) {
        delete session.user;
    } else {
        console.log("login first");
    }
}

logOut();

paymentHistory();
