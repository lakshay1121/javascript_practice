console.log("this is local and storage classes");
let inpArr = ['adrak', 'pyaaz', 'bhindi'];

// setItem - used for assigning hte key value pair
localStorage.setItem('Name', 'Lakshay');
localStorage.setItem('Name2', 'Rahul');

//  localStorage.setItem('sabzi' , inpArr);


//this will store the items in string form 
//for converting it to the value , we will use JSOM.stringify() function which will convert it into the value form.

localStorage.setItem('sabzi', JSON.stringify(inpArr));

//getItem - used for accessing the item from the local storage

let name = localStorage.getItem('Name');
let name2 = localStorage.getItem('Name2');

//converts its to the array

let sabzi = JSON.parse(localStorage.getItem('sabzi'));


//applying for each loop after converting it to the array
sabzi.forEach(function (element) {
    console.log(element);
})

// console.log(name);



//so that how getItem works

//for removing the entire space from the local storage
// localStorage.clear();


//for removing a single item from the local storage we use , removeItem function

// localStorage.removeItem('Name');
// console.log(name2);

// console.log(sabzi);

//session storage
//removes the session stroage when u restart the browser