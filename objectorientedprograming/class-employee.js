class employee {
    constructor(eid,ename,desig,salary) {
        this.eid = eid;
        this.ename = ename;
        this.desig = desig;
        this.salary = salary;
    };

    printEmp() {
        console.log(this.eid,this.ename,this.desig,this.salary);
    };
};

let emp1 = new employee(1000,"nikil","hr",2500);

// emp1.printEmp();
console.log(emp1);