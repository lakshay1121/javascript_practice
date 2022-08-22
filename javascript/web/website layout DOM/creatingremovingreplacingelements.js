console.log("we are in elements.js");

//creating an element

let element = document.createElement('li');
 let x = document.createTextNode('h3' , "this is created by lakshay");

 element.appendChild(x);
 console.log(element);

//add a calss name to li element
element.className = 'element';
element.id = 'created class';

element.setAttribute('title','mytitle');
element.innerText = "this is created by lakshay";


let ul = document.querySelector('ul.container');


// console.log(ul);
// console.log(element);


//replacing the element

// let elem2 = document.createElement('h3');
// elem2.id = 'elem2';
// elem2.className = 'elem2';

// let tnode = document.createTextNode('this is a created node for elem2');

// elem2.appendChild(tnode);

// element.replaceWith(elem2);


let myul  = document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'));


//removing child

myul.removeChild(document.getElementById('lui'));

myul.removeAttribute('li');


let m = document.querySelector('ul');

myul.removeAttribute(m);
console.log(myul);