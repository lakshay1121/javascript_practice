console.log("this is async await");


//async , returns a promise.

async function lakshay() {

        const response = await fetch('https://api.github.com/users');

        console.log("before response");

        const users = await response.json();

        console.log("users resolved");
         

    return users;

    // return ("lakshay");
}
console.log("before calling lakhay");

let a = lakshay();


console.log("after calling lakhay");

console.log(a);

a.then(data => console.log(data));