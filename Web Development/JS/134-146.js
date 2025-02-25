// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// let ipReg = /\d{4}:(\w|\d){3}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/ig;
// console.log(ip.match(ipReg));


// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
// let SNRe = /\bos\d*o\b/ig;
// console.log(specialNames.match(SNRe));
// // Output
// // ['Os10O', 'OsO', 'Os100O']


// let phone = "+(995)-123 (4567)";
// let phoneReg = /\+\(\d{3}\)-\d{3} \(\d{4}\)/g
// console.log(phone.match(phoneReg));

// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";

// let re = /\d{2}(\/| - |\s)\d{2}(\/| - |\s)\d{2,4}/g; // Write Pattern Here

// console.log(date1.match(re)); // "25/10/1982"
// console.log(date2.match(re)); // "25 - 10 - 1982"
// console.log(date3.match(re)); // "25 10 1982"
// console.log(date4.match(re)); // "25 10 82"