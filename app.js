// 1 number

// "use strict";
// const ps = require("prompt-sync");
// const prompt = ps();

// function getGrade(marks) {
//     if (marks >= 90 && marks <= 100) {
//         return 'A+';
//     } else if (marks >= 80 && marks < 90) {
//         return 'A';
//     } else if (marks >= 70 && marks < 80) {
//         return 'B';
//     } else if (marks >= 60 && marks < 70) {
//         return 'C';
//     } else if (marks >= 50 && marks < 60) {
//         return 'D';
//     } else if (marks >= 0 && marks < 50) {
//        return 'F';
//     } else {
//         return 'Invalid marks';
//     }
// }

// const input = prompt("Enter the marks: ");
// const marks = parseInt(input, 10);
// const grade = getGrade(marks);
// console.log(`The grade is: ${grade}`);


//  2 number

// "use strict";
// const ps = require("prompt-sync");
// const prompt = ps();

// function isnumber(num) {
//     return num % 2 === 0;
// }

// const input = prompt("Enter a number: ");
// const number = parseInt(input, 10);

// if (isnumber(number)) {
//     console.log("This is a even number.");
// } else {
//     console.log("This is a odd number.");
// }

// 4 Number
// const prompt = require('prompt-sync')();

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         console.log("Leap year")
//     } else {
//         console.log("Not Leap year")
//     }
// }
// const input = prompt("Enter a year: ");
// const year = parseInt(input);
// isLeapYear()



// 5 number

for (let num = 1; num <= 50; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(num);
    }
}



