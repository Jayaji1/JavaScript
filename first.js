// const student = {
//   fullName: "jiya jain",
//   age: 20,
//   cgpa: 9.1,
//   isPass: true,
// };
// student["age"] = student["age"] + 1;
// console.log(student["age"]);
//console.log(student["fullName"]);
// console.log(student.age);
//student["name"] = "rahul jain";
// console.log(student.name);
// console.log("haya");
// name ="jaya"
// console.log(name);
// let a = 10;
// a = 20;
// a = 30;
// console.log(a);

//unary operator
// let a = 5;
// let b = 2;

// console.log("a =", a, "& b = ", b);
// a--;
// console.log(a);

//input value from prompt
// let n = prompt("enter a number");
// console.log(n);
// if (n % 5 == 0) {
//   console.log("number is divide by 5");
// } else {
//   console.log("not dvide by 5");
// }

//for-of loops, used for arrays, string
// let str = "JayaVishwakarma";
// let size = 0;
// for (let i of str) {
//   console.log("i=", i);
//   size++;
// }
// console.log("size = ", size);

// for (let n = 0; n <= 100; n++) {
//   //console.log("num = ", n);
//   if (n % 2 == 0) {
//     console.log("num = ", n);
//   }
// }

// let gameN = 25;
// let user = prompt("enter a number");

// while (user != gameN) {
//   user = prompt("you enter wrong number");
// }
// console.log("congratulation");

//string
// let str = "Apna College";
// console.log(str[0]);

//template literal
// let str = `This is a template ${1 + 2 + 3}`;
// console.log(str);

// let str = "hello";
// console.log(str.slice(0, 3));

// let FN = prompt("enter your name");
// let user = "@" + FN + FN.length;
// console.log(user);

// let arr = [23, 45, 67, 7, 8, 9];
// console.log(arr);

//function
// function functionName() {
//   console.log("Hello jiya");
//   console.log("hello juni");
// }

// functionName();

// function functionName(msg) {
//   console.log(msg);
// }
// functionName("I love Environment");

//Arrow Sum
// const sum = (a, b) => {
//   console.log(a + b);
// };

// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char == "a" ||
//       char == "e" ||
//       char == "i" ||
//       char == "o" ||
//       char == "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }

//for each loop
let arr = [1, 2, 3, 4];

arr.forEach((val) => {
  console.log(val);
});
