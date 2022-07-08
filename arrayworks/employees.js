let employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]

let empn = employees.sort((a,b) => a[1] - b[1]);
console.log(empn);
// print employee names

let enames = employees.map(emp => emp[1]);

let esalary = employees.map(emp => emp[2]);

let eexp = employees.map(emp => (emp[5] - emp[4]));

// print developer details

let devDetails = employees.filter( det => det[3] == "developer");

// print employee exp above 5 years

let empExp = employees.filter(n => (n[5] - n[4]) <= 5);

// print emp name of ba work

// let baName = employees.filter(n => n[3] == "ba");

// let baNameOnly = baName.map(n => n[1]);

// console.log(baNameOnly);

// or

// let baName = employees.filter(n => n[3] == "ba").map(n => n[1]);

// console.log(baName);

// print name of emp  10 exp

// let baNameExp = employees.filter(n => (n[5] - n[4]) == 10).map(n => n[1]);

// print emp of salary > 30000 and exp > 5

let empDetails = employees.filter(e => (e[2] > 30000) && ((e[5] - e[4]) > 5) )

// console.log(empDetails);