console.log("this is event2.js");
let btn = document.getElementById('btn');



// btn.addEventListener('click', func1);
// // btn.addEventListener('mousedown',func3);
// btn.addEventListener('dblclick', func2);

// function func1(e) {
//     console.log("thanks", e);
//     e.preventDefault();
// }

// function func2(e) {
//     console.log("thanks it is a double click", e);
//     e.preventDefault();
// }


// function func3(e) {
//     console.log("thanks its a mouse down",e);
//     e.preventDefault();
// }



//double click as - dblclick

// document.querySelector('.no').addEventListener('mouseenter',function(){
//     console.log("you entered no");
// })

// document.querySelector('.no').addEventListener('mouseleave',function(){
//     console.log("you exited no");
// })

document.querySelector('.no').addEventListener('mousemove',function(e){

    console.log(e.offsetX);

    document.body.style.backgroundColor = `rgb(
        ${e.offsetX},${e.offsetX},220
    )`;
    console.log("you are moving your mouse");
})