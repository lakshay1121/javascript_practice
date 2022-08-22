let marks = [34,2,2,3,4,5];
const fruits = ['orange','apple','pineapple'];
const mixed = ['str',89,[3,5]];

const arr  = new Array(23,12,32,33,'str');

// console.log(arr);
// console.log(marks);
// console.log(fruits);
// console.log(mixed);

//checks if its array or not , boolean typpe function

// console.log(Array.isArray('dfg'));

// let val = marks.indexOf(34);
// console.log(val);

//mutating the array , OR modifying the arrays

// marks.push(34);
// console.log(marks);

// marks.pop();
// console.log(marks);

//inserts at the front , unshift

// marks.unshift(1004);
// console.log(marks);

//shift , removes front the starting

// marks.shift();
// console.log(marks);

//splice , the first parameter is the starting index and the second parameter is the number of elements you want to remove from the starting index

// marks.splice(1,2);

//reverse

// marks.reverse();

//concate

// let marks2 = [1,2,3,4];
// marks = marks.concat(marks2);
// console.log(marks);


let myobj = {
    name: 'lakshay',
    channel:'learn to code',
    isActive:'true',
    marks:[2,3,4,5],
}

console.log(myobj);

console.log(myobj.marks);