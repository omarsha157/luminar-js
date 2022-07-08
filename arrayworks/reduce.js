let arr = [1,2,3,4,5,6];
// sum of an array
let sumArr = arr.reduce((n1,n2) => n1+n2);

// console.log(sumArr);
// max number in an array
let arrMax = arr.reduce((n1,n2) => n1 > n2 ? n1 : n2);

// console.log(arrMax);
// min number in an array
let minArr = arr.reduce((n1,n2) => n1 < n2 ? n1 : n2);

// console.log(minArr);

let employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
    [1005,"kero",40000,"ba",1990,2015]
]

let highPay = employees.reduce((e1,e2) => e1[2] > e2[2] ? e1 : e2);

// console.log(highPay);

let lowPay = employees.reduce((e1,e2) => e1[2] < e2[2] ? e1 : e2);

// console.log(lowPay);

let mostexp = employees.reduce((e1,e2) => (e1[5]-e1[4]) > (e2[5] - e1[4]) ? e1 : e2);

// console.log(mostexp);
let topexp = employees.map((e1,e2) => (e1[5]-e1[4])).reduce((e1,e2) => e1 > e2 ? e1 : e2);

// console.log(topexp);

let topemp = employees.filter(e1 => (e1[5]-e1[4]) == topexp);

console.log(topemp);





