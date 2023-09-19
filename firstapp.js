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

// const object1 = { 'key1': 1 }
// const object2 = { ...obj1 }
// if (object2 === object1) {
//     console.log('same objects')
// }
// else {
//     console.log('different objects')
// }

// const obj1 = { 'key1': 1, 'key2': 2 }
// const obj2 = { ...obj1, key1: 1000 }
// console.log(obj1)
// console.log(obj2)

//Destructuring arrays and objects

// const obj1 = { 'key1': 1, "key2": 2, "key3": 1000 }
// const { key1, key3 } = { ...obj1 }
// console.log(key1, key3)

// const arr1 = ['value1', 'value2']

// const [val1, val2] = arr1
// console.log(val1)
// console.log(val2)

// const obj2 = { 'key1': 1, "key2": 2, "key3": 1000 }
// let { keys1, keys3 } = obj1
// keys1 = 20;
// keys3 = 123
// console.log(obj2.key1, obj2.key3)

//async code and promises

// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000)

// console.log('d');

// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000)

// setTimeout(() => console.log('d'), 0)

// console.log('e');




async function func() {
    console.log('a');
    console.log('b');

    await new Promise(resolve => setTimeout(() => {
        console.log('c');
        resolve();
    }, 3000));
    await new Promise(resolve => setTimeout(() => {
        console.log('d');
        resolve();
    }, 0));
    console.log('e');

}
func()



