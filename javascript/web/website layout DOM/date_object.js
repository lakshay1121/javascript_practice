console.log("we are in dateobject.js");


let today = new Date();
// console.log(typeof today);

let otherDate = new Date('8-4-2003 04:54:08');

// let otherDate = new Date('june 13 1976');
let a = otherDate . getDay();
//it will print 1 because monday is on position  1
let b = otherDate.getDate();
let c = otherDate.getMinutes();
let d = otherDate.getSeconds();
//no of seconds till , the date which you have entered to today.
let hour = otherDate.getHours();
let e = otherDate.getTime();
let m = otherDate.getMonth();

otherDate.setDate(23);
otherDate.setMonth(0);//januaray
otherDate.setFullYear(1900);//sets year to 1900
otherDate.setMinutes(2);
otherDate.setHours(1);
otherDate.setSeconds(3);

// console.log(a , b, c ,d , e , m);
console.log(otherDate);

