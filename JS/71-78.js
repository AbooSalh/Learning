// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// let Elzero = mix
//   .map((ele) => {
//     return isNaN(parseInt(ele)) ? ele : "";
//   })
//   .reduce((acc, ele) => {
//     return acc + ele;
//   });
// console.log(Elzero);
// Elzero
// 2
let myString = "EElllzzzzzzzeroo";

// Elzero
// 3
// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// let newNums = numsAndStrings
//   .filter((ele) => {
//     return !isNaN(parseInt(ele));
//   })
//   .map((ele) => {
//     return -ele;
//   });
//   console.log(newNums);
// [-1, -10, 10, 20, -5, -3]


// 4
let nums = [2, 12, 11, 5, 10, 1, 99];
let newNums = nums.reduce(
  (all, ele) => (ele % 2 == 0 ? all * ele : all + ele),
  1
);
console.log(newNums);
// 500