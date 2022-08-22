//string concatenation

// let name = 'lakshay';
// let greeting = 'good night';
// console.log(name + ' ' + greeting);


//concat is a function to concatenate

// html = 'hyper text markup ';
// html = html.concat('this');
// console.log(html);

//length
html = 'hyper text markup language';

// console.log(html.length);

// lower and upper casee function does'nt modify the value of the string

// console.log(html.toLowerCase());
// console.log(html.toUpperCase());

//indexing
console.log(html[2]);

//indexOF
   //gives the first occurence index of the particular sentence/alphabet or a substring
   //and if is not present then i will return
   //-1
// console.log(html.indexOf('m'));

//lastIndexOf , gives the last occurence of that substring

// console.log(html.lastIndexOf('a'));

//endsWith - returns the boolean value , if string is ending with that string then returns true othervise returns false


// console.log(html.endsWith('e'));

//includes - same as endswith returns true if that s available in that string than prints true othervise false


//substrings - gives the substring b/w   the starting index and , excluding the last index

// console.log(html.substring(1,3);
 

//.slice is a function if you write  -4 , gives you the last for index same as slicing in python

// console.log(html.slice(-4));

//.split function , convert to array
// whatever you write in split it splits where ever it finds the character or element.

// console.log(html.split('n'));


//replace function , changes the first occurence of the element you want to change to a new string or number or anything

// console.log(html.replace('hyper' , 'it'));


//template literals

// let name = 'lakshay';
// let fruit1 = 'orange';
// let fruit2 = 'apple';
// let myhtml = `Hello ${name}
//           <h1> this is a heading</h1>
//           <p> you like ${fruit1} and ${fruit1}
// `;
// document.body.innerHTML = myhtml;
