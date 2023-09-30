console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
console.log(100 * 1000); // 100000
console.log(100 * 1_000); // 100000
console.log(50000 + 50000); // 100000
console.log(50_000 + 50_000); // 100000
console.log(5 * 10000 + 5 * 10000); // 100000
console.log((5 * 1e4)+(5 * 1e4)); // 100000
console.log(1e5); // 100000

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// console.log(String(Number.MAX_SAFE_INTEGER).slice(-4)); // 16


let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)) // 100.57


let num = 10;

console.log(Number.isInteger(num)+Number.isInteger(num)); // 2


let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(flt.toFixed()); // 10



console.log((Math.random()*4).toFixed()); // 0 || 1 || 2 || 3 || 4