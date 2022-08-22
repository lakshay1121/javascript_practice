console.log("we are in mathobject.js");

let x = 3 , y = 6;

let z; 

//math objects
z = x + y;
// console.log(z);

// + operator 
//- operator
//* multiply operator
// / divide operator

//exploring the math object

z = Math;
//javascript math objects , basically container all the maths function you need.

// z = Math.PI;
//ceil will increase the value.
z = Math.ceil(5.6);

//for floor remove the elements after point and the remaining is the ans , that is we have to decrease the value.

// z = Math.floor(5.3);

z = Math.random();
//from 0 to 100
z = 100 * Math.random();

//from 50 to 100

z = Math.ceil(50 + (100-50)*Math.random());



console.log(z);