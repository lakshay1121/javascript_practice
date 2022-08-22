console.log("this is fetch api tutorial")

let mybtn = document.getElementById('mybtn');
let content = document.getElementById('content');


//gett request.


// function getData() {

//     url = "text.txt";

//     fetch(url).then((response) =>{

//         console.log("inside first then");

//         return response.text();

//     }).then((data) =>{

//         console.log("inside second then");

//         console.log(data);
//     })
// }


// function getData() {

//     url = "https://api.github.com/users";

//     fetch(url).then((response) =>{

//         console.log("inside first then");

//         return response.json();

//     }).then((data) =>{

//         console.log("inside second then");

//         console.log(data);
//     })
// }


function PostData() {

    url = "https://api.github.com/users";

    data ='jlj.txt';

    params ={
        method:'post',

        header:{
            'content-Type':'application/json'
        },
        body:JSON.stringify(data);
    }

    fetch(url , params).then((response) =>{

     
        return response.json();

    }).then((data) =>{

       

        console.log(data);
    })
}


PostData();


//so fetch call is a asynchronous call , so it will run in the background.