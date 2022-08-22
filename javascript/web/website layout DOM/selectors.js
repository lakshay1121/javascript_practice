//selecting a particular element from your code

//two types of element selector - 

//1 - single selector
//2-multiple selector

//single selector-
//get element by id name-

// let element = document.getElementById('myfirst');

//gives all the child nodes of that particular id or class - 

// element = element.childNodes;

// gives the parent node of a particular tag-

// element = element.parentNode;

//you can even change the css from javascript
// element = element.style.color = 'red';

//you canedit inner text using this tag

// element = element.innerText = 'this is edited text';

//you can edit inner html using this tag

// element = element.innerHTML = 'hey this is edited by innerHTML tag';


//Query selector
//you can use tags inside that

// let sel = document.querySelector('#myfirst');

// let div = document.querySelector('div');
// //selects only one element
// sel.style.color = 'red';


// console.log(element);
// console.log(div);

//multi elements selector
// let elem = document.getElementsByClassName('container');

// elem = document.getElementsByClassName('hey');

let elem = document.getElementsByClassName('hey');

// console.log(elem);

//html collection iteration

Array.from(elem).forEach(element =>{
    console.log(element);
    element.style.color = 'blue';
})

