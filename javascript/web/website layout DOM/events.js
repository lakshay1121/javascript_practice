console.log("this is events.js");

//events

//CLICK FUNCTION
document.getElementById('heading').addEventListener('click', function (e) {
    let x;
    console.log(('you have clicked the heading!'));
    // console.log(e);
    x = e.target.className;
    // x = Array.from(e.target.classList);

    // x = e.offsetX;
    // x = e.clientX;



    console.log(x);

})


//mouseover - 

