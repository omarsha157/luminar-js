let employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
];
// some check condition and always return true or false

let isBA = employees.some(e => e[3] == "ba");

// console.log(isBA);

let thirtySalary = employees.some(e => e[2] >= 30000);

console.log(thirtySalary);