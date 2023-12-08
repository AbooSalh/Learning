// Create Your Object Here
let member = {
    name:"Elzero",
    age:"38",
    country:"Egypt",
    fullDetails:()=>{
        return `My Name Is ${member.name}, My Age Is ${member.age}, I Live in ${member.country}`;
    }
}
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt





// Method One
// Create Your Object Here
objMethodOne = {
    property:"Method One"
}
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
objMethodTwo = new Object({property: "Method Two"})
console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
objMethodThree = Object.create({ property: "Method Three" });
console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
objMethodFour = Object.assign({}, { property: "Method Four" });
console.log(objMethodFour.property); // "Method Four"



let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({a},threeNums,twoNums)
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/


The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length
console.log(Object.values(myFavGames)[1].publisher);
for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(`The Publisher Is ${Object.values(myFavGames)[i].publisher}}`);
  console.log(`The Price Is ${Object.values(myFavGames)[i].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (Object.values(myFavGames)[i].hasOwnProperty("bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${Object.values(myFavGames)[i].bestThree.one}`);
    console.log(
      `Second => ${Object.values(Object.values(myFavGames)[i].bestThree)[1]}`
    );
    console.log(`Third =>  ${Object.values(myFavGames)[i].bestThree.three}`);
  }
  console.log("#".repeat(20));
}

// Ouput

