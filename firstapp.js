// const fs = require("fs");
// fs.writeFileSync("hello.txt", "hello world")
// console.log("hello world");

//Arrow functions

// let result = (a, b) => {
//     return a * b;
// }
// console.log(result(12, 14))

//Objects

// let student = {
//     name: "Avadhut",
//     age: 21,
//     DOB: "6/6/2003",
//     data: function () {
//         console.log(`Name: ${this.name},Age: ${this.age},Dob:${this.DOB}`);
//     }
// };
// student.data();

//Arrays

// const hobbies = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];
// console.log(hobbies.map((v) => {
//     return v == ' ' ? 'empty string' : v;
// }));
// console.log(arr);

//Rest and Spread Operators

const object1 = { 'key1': 1 }
const object2 = { ...obj1 }
if (object2 === object1) {
    console.log('same objects')
}
else {
    console.log('different objects')
}

const obj1 = { 'key1': 1, 'key2': 2 }
const obj2 = { ...obj1, key1: 1000 }
console.log(obj1)
console.log(obj2)