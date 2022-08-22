console.log("welcome to tutorial of traversing the Dom");

//picks the first element of the class

let cont = document.querySelector('.hey');

//we are printing the name of the first element of cont childnodes.



//counts all the child nodes under that class
// console.log(cont.childNodes);


//only counts the elements

// console.log(cont.children);


let nodeName  = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;

// console.log(nodeType);

// 1 is for Element
// 2 is for attribute
// 3 is for text node
// 8 is for Comment
// 9 is for document
// 10 is for Doctype


// console.log(nodeName);

let container = document.querySelector('.container');

// console.log(container.children);

// we can also hash the elements

// console.log(container.children[1].children);

//lastelementchild and first element child
//prints the value accordingnto their name

// console.log(container.lastElementChild);

//child element count
//counts the element in the clalss
//counts only the elements

console.log(container.childElementCount);

