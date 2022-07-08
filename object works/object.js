let student = {
    rollNo: 100,
    name: "kevin",
    course: "mearn"
}

//? check gender key exist in object
// console.log("gender" in student);

//? add gender male to object

student.gender = "male";

// console.table(student);

// ? add skills css,html,bootstrap,js

student.skills = ["html","css","bootstrap","js"];

// console.log(student);

// ? add new skill angular

student.skills.push("angular");

// console.log(student);

// ? check for vaccinated property if no set vaccinated false

// this has an empty block not preffered
// if ("vaccinated" in student) {
    
// } else {
//     student.vaccinated = false;
// }

//* here ("vaccinated" in student) returns false so !(false) returns true, so no need for else statement

if (!("vaccinated" in student)) {
    student.vaccinated = false;
}

// console.log(student);



