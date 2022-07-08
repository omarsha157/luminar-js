let students=[
    [100,"akhil","mearnstack",false,["js","css","html"],false],
    [101,"arun","mearnstack",true,["js","css","html","angular","react"],true],
    [102,"anu","django",true,["js","css","html","bootstrap","python","django"],true],
    [103,"ajay","django",false,["js","css","html","python"],true],
    [104,"vinu","django",true,["js","css","html","python","django","angular"],false],
    [105,"tinu","testing",true,["java","manuel","selinum"],false],
    [106,"jay","testing",true,["java","ant","jira"],true],
    [107,"ann","bigdata",false,["python","hadoop","pyspark","hive"],false],
]

//? 5 questions
//?name of got placed and completed course

// let pcStd = students.filter(n => n[3] && n[5]).map(n => n[1]);

// console.log(pcStd);

//? name of mearnstack
// let stdCourse = students.filter(n => n[2] == "mearnstack").map(n => n[1]);

// console.log(stdCourse);

//? didint place name

// let noPlace = students.filter(n => n[3] == false).map(n => n[1]);

// console.log(noPlace);

//? if testing course print technology

// let stdTech = students.filter(n => n[2] == "testing").map(n => n[4]);

// console.log(stdTech);

//? tech of placed students

// let techPlaced = students.filter(n => n[3] == true).map(n => n[2]);

// console.log(techPlaced);

//? student who know python

// let pyStd = students.filter(n => n[4].includes("python"));

// * map returns an array of name while with foreach you can consolelog each name
// let pyStd = students.filter(n => n[4].includes("python")).map(n => n[1]);
// * while using for each no need to console log (pystd) it will show undefined at end
// let pyStd = students.filter(n => n[4].includes("python")).forEach(n => console.log(n[1]));

// console.log(pyStd);

//? students who know django and python

// let pyanStd = students.filter(n => n[4].includes("python") && n[2] =="django");

// console.log(pyanStd);