// function sayHello(theName, theGender) {
//   // Your Code Here
//   if (theGender === "Male") {
//     console.log(`Hello Mr ${theName}`);
//   } else if (theGender === undefined) {
//     console.log(`Hello ${theName}`);
//   } else {
//     console.log(`Hello Miss ${theName}`);
//   }
// }

// // Needed Output
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"

// function calculate(firstNum, secondNum, operation) {
//   // Your Code Here
//   if (operation === "add" || operation === undefined && typeof secondNum === "number") {
//     console.log(firstNum + secondNum);
//   }else if (operation === "subtract"){
//     console.log(firstNum - secondNum);
//   }else if(operation === "multiply"){
//     console.log(firstNum * secondNum);
//   }else{
//     console.log("Second Number Not Found");
//   }
// }

// // Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, 'add'); // 50
// calculate(20, 30, 'subtract'); // -10
// calculate(20, 30, 'multiply'); // 600


// function ageInTime(theAge) {
//   // Your Code Here
//   if(theAge < 10 || theAge < 100){
//     console.log((theAge*12)+" months");
//     console.log((theAge * 52) + " weeks");
//     console.log((theAge*365) + " days");
//     console.log(theAge * 8760 + " hours");
//     console.log(theAge * 525960 + " minutes");
//     console.log(theAge * 31557600 + " seconds");
    
//   }else{
//     console.log("Age Out Of Range");
//   }
// }

// // Needed Output
// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months

// function checkStatus(a, b, c) {
//     let arr = []
//     arr.push(a,b,c)
//     for (let i = 0; i < 3; i++) {
//       typeof arr[i] === "string"
//         ? (a = arr[i])
//         : typeof arr[i] === "number"
//         ? (b = arr[i])
//         : arr[i] === false
//         ? (c = "Not Availble")
//         : (c = "Availble");
//     }
//     return console.log(`Hi ,${a}, Your Age Is ${b} ,You Are ${c} For Hire`);
// }

// // Needed Output
// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// function createSelectBox(startYear, endYear) {
//   // Your Code Here
//       document.write(`<select>`);
//       for(startYear;startYear<=endYear;startYear++)
//       {
//           document.write(`<option value="${startYear}">${startYear}</option>`);
//       }
//       document.write(`</select>`);
// }
// createSelectBox(2000, 2021);

// function multiply(...nums){
//     let result = 1
//     for(let i =0;i < nums.length;i++){
//         if(typeof nums[i] !== "number"){
//             continue;
//         }else{
//             result *= parseInt(nums[i])
//         }
//     }
//     console.log(result);
// }

// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000