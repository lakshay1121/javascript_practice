console.log("this is promise.js")

//promises
//-resolve
//-reject
//-pending


// function func1() {

//     return new Promise(function (resolve, reject) {

//         setTimeout(() => {

//             const error = true;

//             if (!error) {

//                 console.log("your promise has been resolved!");

//                 resolve();
//             }

//             else {

//                 console.log("your promise has not been resolved!");

//                 reject('sorry not fullfilled');
//             }


//         }, 2000);
//     });

// }


// func1().then(function () {

//     console.log("lakshay: thanks for resolving");
// }).catch(function (error) {

//     console.log("lakshay: very bad bro! " + error);
// })

function myDisplayer(element) {

    document.getElementById('demo').innerHTML = element;
}

let myPromise = new Promise(function (myResolve, myReject) {

    let x = 0;

    if (x == 0) {

        myResolve("ok");
    }

    else {
        myReject("Error!");
    }

});

myPromise.then(

    function myResolve(value) {

    myDisplayer(value);
} ,

    function myReject(error) {

    myDisplayer(error);
}
)