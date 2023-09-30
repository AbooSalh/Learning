// Test Case 1
let num = 9; // "009"
if (num < 10) {
  console.log("00" + num);
}
// Test Case 2
let num2 = 20; // "020"
if (num2 > 10) {
  console.log("0" + num2);
}
// Test Case 3
let num3 = 110; // "110"
if (num3 > +100) {
  console.log(num3);
}

let num1 = 9;
let str = "9";
let str2 = "20";
if (num1 == str) {
  console.log(`${num1} Is The Same Value As ${str}`);
}
if (num1 !== str && num1 == str) {
  console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
}
if (num1 !== str2) {
  console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
}
if (str != str2 && typeof str === typeof str2) {
  console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
}
// Output
("{num1} Is The Same Value As {str}");
("{num1} Is The Same Value As {str} But Not The Same Type");
("{num1} Is Not The Same Value Or The Same Type As {str2}");
("{str} Is The Same Type As {str2} But Not The Same Value");

let num4 = 10;
let num5 = 30;
let num6 = "30";
if (+num6 > num4 && num6 !== num5) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number"
  );
} else if (+num6 > num4 && num6 == num5 && num6 !== num5) {
  console.log(
    "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
  );
} else {
  console.log(
    `${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`
  );
}
// Needed Output
("30 Is Larger Than 10 And Type string Not The Same Type As number");
("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");





// Edit What You Want Here

let num11 = 91;
let num22 = 3;
let num33 = 91;
let num44 = 200;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num11 > num22) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num11 > num22 && num11 < num44) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num11 > num22 && num11 === num33) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num11 + num22) < num44) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num11 + num33) < num44) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num11 + num22 + num33) < num44) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num44 - (num11 + num33) + num22 === 21) {
  console.log("True");
} else {
  console.log("False");
}