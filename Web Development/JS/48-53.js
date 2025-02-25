// let end = 100;
// let exclude = 40;
// for (let start = 10;start <= end ; start+=10){
//     if(start !== 40){
//         console.log(start);
//     }else{
//         continue
//     }
// }

// let start = 10;
// let end = 0;
// let stop = 3;
// for(let i = start; i >= stop;i--)
// {
//     if(i < start)
//     {
//         console.log((""+end+i));
//     }
//     else
//     {
//         console.log(i.toFixed());
//     }
// }

// let start = 1;
// let end = 6;
// let breaker = 2;

// for(let i= start;i<=end;i++)
// {
//     console.log(i);
//     for(let k = breaker; k <= breaker*breaker;k+=breaker)
//     {
//         console.log("-- " + k);
//     }

// }

// let index = 10;
// let jump = 2;

// for (index>= jump*jump;;) {
//     if(index>=jump*jump){
//         console.log(index);
//     }else{
//         break;
//     }
//     index -= jump;

// }

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// let one  = letter.length;

// for(let i= one ,k=one ; i < friends.length;i++)
// {
//     if(! friends[i].startsWith(letter.toUpperCase()))
//     {
//         console.log(`${k++} => ${friends[i]}`);
//     }
// }

// let start = 0;
// let swappedName = "elZerO";

// // Output
// "ELzERo"
// let output = [];

// for(let i= start ; i < swappedName.length;i++)
// {
//     output[i] = swappedName[i]===swappedName[i].toLowerCase() ? swappedName[i].toUpperCase(): swappedName[i].toLowerCase();
// }

// console.log(output.join(""));

// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];
// for (let i = start; i < mix.length; ) {
//   for (let i = start; i < mix.length; ) {
//     i++;
//     if (typeof mix[i] === "number") {
//       console.log(mix[i]);
//     }
//   }
// }
// // Output
// 2;
// 3;
// 4;
