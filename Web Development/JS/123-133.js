let setOfNumbers = new Set().add(10);
setOfNumbers.add(20).add(setOfNumbers.size)
console.log(setOfNumbers);
setOfNumbers.forEach((e,i)=>{
    if(i == setOfNumbers.size -1){
        console.log(e);
    }
});

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log(new Set(myFriends.sort()));
// Needed Output
(4)[("Ahmed", "Mahmoud", "Osama", "Sayed")];

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};
let myMapInfo = new Map(Object.entries(myInfo));
console.log(myMapInfo);
console.log(myMapInfo.size);
console.log(myMapInfo.has("role"));
// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true



let theNumber = 100020003000;
let mySet = new Set([...theNumber.toString()])
mySet.delete("0")
console.log(mySet);
// Needed Output
123;


let theName = "Elzero";
console.log(
    [...theName]
);
console.log(
    theName.split("")
);
console.log(Array.from(theName))
let array = []
for (let i = 0; i < theName.length; i++) {
    array.push(theName[i]);
}
console.log(array);
console.log(Object.assign([], theName));
// Needed Output
["E", "l", "z", "e", "r", "o"];


let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// Needed Output
[1, 2, 3, 4, 5, 6];
console.log([...numsOne,...numsTwo]);
let arr = []
arr.push(...numsOne,...numsTwo);
console.log(arr);
console.log(numsOne.concat(numsTwo));


let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log(Math.max(...n2) * [...n1,...n2].length);
// Needed Output
210;