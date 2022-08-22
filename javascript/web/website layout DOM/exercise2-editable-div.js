console.log("exercise 2 editable div using javascript");


// you have to create a div and inject it into the page which contains a heading 

// whenever someone clicks on the div , it should be editable and the data will be saved


//create a new element
let divelem = document.createElement('div');
//add text to that created element

let text = document.createTextNode('this is my element click to edit it');

divelem.appendChild(text);
//give element id style and class
divelem.setAttribute('class' , 'elem');

divelem.setAttribute('id','elem');

divelem.setAttribute('style','border:2px solid black; width:154px ; margin:34px; padding:23px');

//grab the main container

let container = document.querySelector('.container');

let first = document.getElementById('myfirst');


//insert the element before element with id first

container.insertBefore(divelem, first);

// console.log(divelem,container, first);

//adding the eventlistener to divelem

divelem.addEventListener('click' , function(){
    
    let noofTextArea = document.getElementsByClassName('textarea').length;

    if(noofTextArea==0){

    
    let html = elem.innerHTML;

    divelem.innerHTML = `<textarea class = " "textare  form-control" id = "textarea" rows = "3"> ${html} </textarea>`;
    }

    //listen for the blur event for the text area

    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur' , function(){
        elem.innerHTML = textarea.nodeValue;
    })

})

