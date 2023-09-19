// const fs = require("fs");
// fs.writeFileSync("hello.txt", "hello world")
// console.log("hello world");

//Arrow functions

// let result = (a, b) => {
//     return a * b;
// }
// console.log(result(12, 14))

//Objects

let student = {
    name: "Avadhut",
    age: 21,
    DOB: "6/6/2003",
    data: function () {
        console.log(`Name: ${this.name},Age: ${this.age},Dob:${this.DOB}`);
    }
};
student.data();