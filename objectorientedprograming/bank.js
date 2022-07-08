class bank {
    // ? create acc
    // ? deposit amnt
    // ? withdraw amnt
    // ? close acc

    bank_name = "sbk";

    createAcount(acno,cst_name,phone,email) {
        this.acno = acno;
        this.customerName = cst_name;
        this.phone = phone;
        this.email = email;
        this.bal = 2000;
    };

    deposit(amount) {
        this.bal += amount;
        console.log(`your ${this.bank_name} has been credited with amount ${amount} aval bal ${this.bal}`);
    };

    withdraw (amount) {
        if (this.bal > amount) {
            this.bal -= amount;
            console.log(`your ${this.bank_name} has been debited with amount ${amount} aval bal ${this.bal}`);
        } else {
            console.log(`insufficent bal transaction declined`);
        }
    };
    balEnq() {
        console.log(`your available bal is ${this.bal}`);
    }
};

let acc1 = new bank();

acc1.createAcount(1000,"james",01234567,"abc@gmail.com");

// acc1.deposit(10000);

// acc1.withdraw(4000);

// acc1.balEnq();